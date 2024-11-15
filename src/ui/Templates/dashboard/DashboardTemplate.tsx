'use client'
import { FaRegFolderOpen } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import { CiCalendar } from "react-icons/ci";
import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IProjectsResponse } from "@/app/core/application/dto/projects/getAllResponse.dto";
import CartInfo from "@/ui/Atoms/dashboard/Cart";
import { SearchComponent } from "@/ui/Atoms/dashboard/Search";
import MainComponent from "@/ui/Organisms/dashboard/Projects";

interface IProsp {
    totalProjects: number;
    activeProjects: number;
    organizers: number;
    data: IProjectsResponse;
}
const PageContainer = styled.div`
    margin: auto;
    width: 95%;
    height: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const HeaderProjects = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BodyProjects = styled.div`
    padding: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
`;

const H2 = styled.h2`
    width: 100%;
    text-align: start;
    font-size: 20px;
`;

const Search = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
`;

export default function DashboardTemplate({ data, totalProjects, activeProjects, organizers }: IProsp) {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    // const [ModalOpenEdit, setModalOpenEdit] = useState(false);
    // const [SelectIdEdit, setSelectIdEdit] = useState<number>(1);

    // const toggleModalEdit = () => {
    //     // setModalOpenEdit(!ModalOpenEdit);
    //     console.log("Modal");
    // }

    const handleEdit = (Id: number) => {
        // setSelectIdEdit(Id);
        // toggleModalEdit();
      console.log(Id);
    }

    const handleDelete = async (Id: number) => {
        setIsLoading(true);
        try {
            const response = await fetch(`/api/projects/delete/${Id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Error al eliminar el proyecto");
            }

            alert("Proyecto eliminado exitosamente");
            router.refresh();
            return await response.json();

        } catch (error) {
            console.error("Error en el DELETE:", error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <PageContainer>
            {isLoading ? (
                <h1>Cargando...</h1>
            ) : (
                <>
                    <HeaderProjects>
                        <CartInfo title="Total Proyectos" icon={<FaRegFolderOpen size={20} />} body={totalProjects} />
                        <CartInfo title="Proyectos Activos" icon={<MdOutlineSignalCellularAlt size={20} />} body={activeProjects} />
                        <CartInfo title="Organizadores" icon={<SlPeople size={20} />} body={organizers} />
                        <CartInfo title="OProximo Proyecto" icon={<CiCalendar size={20} />} body="Invalid Date" />
                    </HeaderProjects>
                    <BodyProjects>
                        <H2>Lista de Proyectos</H2>
                        <Search>
                            <SearchComponent />
                        </Search>
                        <MainComponent data={data} onEdit={handleEdit} onDelete={(Id) => handleDelete(Id)} />
                    </BodyProjects>
                    {/* <Modal isOpen={ModalOpenEdit} onClose={toggleModalEdit} title="Editar Servicio">
                        <EditForm onClose={toggleModalEdit} Id={SelectIdEdit} />
                    </Modal> */}
                </>
            )}
        </PageContainer>
    )
}