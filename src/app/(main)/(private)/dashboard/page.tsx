import { IProjectsRequest } from "@/app/core/application/dto/projects/getAllResponse.dto";
import { ProjectsServices } from "@/app/infrastructure/services/projects-services.service";
import DashboardTemplate from "@/ui/Templates/dashboard/DashboardTemplate";

interface IProps{
    searchParams: IProjectsRequest;
  }

const useProjectService = new ProjectsServices();
// const UseUserService = new UsersServic();

export default async function DashboardPage({ searchParams }: IProps) {
    const page = searchParams.page ? parseInt(searchParams.page.toString()) : 1;
    const data = await useProjectService.getProjects({page, size: 7});
    // const users = await UseUserService.getUsers();
    
    const totalProjects = data.metadata.totalItems;

    const activeProjects = data.data.filter(project => project.isActive).length;

    const organizers = 1;

    return (
        <>
            <DashboardTemplate 
                data={data} 
                totalProjects={totalProjects} 
                activeProjects={activeProjects} 
                organizers={organizers} 
            />
        </>
    );
}