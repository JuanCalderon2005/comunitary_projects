export interface Organizer {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    photo: string | null;
}


export interface EventData {
    id: number;
    title: string;
    description: string;
    startDate: string; 
    endDate: string;
    isActive: boolean;
    organizer: Organizer;
}


export interface Metadata {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}


export interface IProjectsResponse {
    statusCode: number;
    message: string;
    data: EventData[];
    metadata: Metadata;
}

export interface IProjectsRequest{
    page: number;
    size: number;
}

export interface IProjectResponse {
    statusCode: number;
    message: string;
    data: EventData[];
}