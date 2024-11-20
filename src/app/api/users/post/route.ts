import { UserService } from "@/app/infrastructure/services/user.service";
import { NextResponse } from "next/server";


const useRegisterService= new UserService();

export async function POST(req:Request) {
  try {
      const formData = await req.formData();
      const newUser =  await useRegisterService.register(formData);

      return NextResponse.json(newUser, {status: 200});
  } catch (error) {

      return NextResponse.json({message: error}, {status: 500});
  }
}
