'use client'
import { IProjectsResponse } from "@/app/core/application/dto/projects/getAllResponse.dto";
import ButtonPag from "@/ui/Atoms/dashboard/ButtonPag";
import TableComponent from "@/ui/Molecules/dashboard/Table";
import { useRouter, useSearchParams } from "next/navigation";
import styled from "styled-components";

interface MainProps {
    onEdit?: (rowIndex: number) => void;
    onDelete?: (rowIndex: number) => void;
    data: IProjectsResponse;
}

const Pagination = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
`;

const MainContent = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const StyledDiv = styled.div`
    width: 100%;
`;

export default function MainComponent({ data, onEdit, onDelete }: MainProps) {

    const searchParams = useSearchParams();
    const router = useRouter();

    const HandleClickNext = (nextPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (nextPage <= data.metadata.totalPages) {
            params.set('page', nextPage.toString());
            router.push(`?${params.toString()}`);
        }
    };

    const HandleClickBack = (backPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (backPage > 0) {
            params.set('page', backPage.toString());
            router.push(`?${params.toString()}`);
        }
    };

    const courrentPage = data.metadata.currentPage;

    const content = data.data;

    const tbody = content;

    return (
        <MainContent>
            <StyledDiv>
                <TableComponent tbody={tbody} onEdit={onEdit} onDelete={onDelete} />
            </StyledDiv>
            <Pagination>
                <ButtonPag label="<" onClick={() => HandleClickBack(courrentPage - 1)} />
                Página {courrentPage} de {data.metadata.totalPages}
                <ButtonPag label=">" onClick={() => HandleClickNext(courrentPage + 1)} />
            </Pagination>
        </MainContent>
    )
}