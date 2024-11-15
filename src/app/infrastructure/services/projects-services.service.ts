import { PProjects } from "@/app/core/application/ports/projects.port";
import { HttpClient } from "../utils/client-http";
import {
  IProjectsRequest,
  IProjectsResponse,
} from "@/app/core/application/dto/projects/getAllResponse.dto";

export class ProjectsServices implements PProjects {
  private clientHttp: HttpClient;

  constructor() {
    this.clientHttp = new HttpClient();
  }

  async getProjects({
    size,
    page,
  }: IProjectsRequest): Promise<IProjectsResponse> {
    try {
      const response = await this.clientHttp.get<IProjectsResponse>(
        `projects?size=${size}&page=${page}`
      );
      return response;
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener los proyectos");
    }
  }

  getReport(): Promise<ArrayBuffer> {
      try {
        const response = this.clientHttp.get<ArrayBuffer>('projects/report/download',true);
        return response;
      } catch (error) {
        console.error(error);
        throw new Error("Error al obtener el reporte");
        
      }
  }
}
