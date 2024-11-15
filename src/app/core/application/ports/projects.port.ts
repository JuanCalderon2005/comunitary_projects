import {
  IProjectsRequest,
  IProjectsResponse,
} from "../dto/projects/getAllResponse.dto";

export interface PProjects {
  /**
   * Get all projects
   * @return {Promise<IProjectsResponse>}Register response
   */
  getProjects({ size, page }: IProjectsRequest): Promise<IProjectsResponse>;

  /**
   * Get project report
   * @return {Promise<ArrayBuffer>}Report response
   */
  getReport(): Promise<ArrayBuffer>;
}
