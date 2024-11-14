import { ILoginRequest } from "@/app/core/application/dto/auth/request-login.dto";
import { AuthService } from "@/app/infrastructure/services/auth.service";
import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface AuthToken {
  id?: string;
  access_token?: string;
}

interface AuthUser {
  id: string;
  name: string;
  email: string;
  access_token: string;
}

interface CustomSession extends Session {
  user: {
    id?: string;
    access_token?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Correo Electrónico", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.password || !credentials?.email) {
          console.error("Credenciales faltantes");
          return null;
        }

        const loginRequest: ILoginRequest = {
          email: credentials.email,
          password: credentials.password,
        };

        try {
          const authService = new AuthService();
          const response = await authService.login(loginRequest);

          console.log(response);
          
          console.log(response.data);      
          // Verificar si la respuesta contiene un token de acceso
          if (response.data?.access_token) {

            return {
              email: loginRequest.email,
              name: loginRequest.email,
              access_token: response.data.access_token,
            } as AuthUser;
          }

          // Si no hay access_token en la respuesta, retornar null
          console.error("Token de acceso no encontrado");
          return null;
        } catch (error) {
          console.error("Error en la autenticación:", error);
          return Promise.reject(new Error("Error en la autenticación. Verifique las credenciales."));
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const authUser = user as AuthUser;
        token.id = authUser.id;
        token.access_token = authUser.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      const customSession = session as CustomSession;
      customSession.user.id = (token as AuthToken).id;
      customSession.user.access_token = (token as AuthToken).access_token;
      return customSession;
    },
  },
};

export default NextAuth(authOptions);
export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
