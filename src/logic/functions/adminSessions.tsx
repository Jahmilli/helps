import { get, post, put } from "./core/fetch";
import { IWorkshopSession } from "../domains/workshopSessionDetails.domain";

export const getWorkshopSessions = async (workshopId: string): Promise<any> => {
    return await get(`/api/v1/workshop/${workshopId}/sessions`);
};

export const postWorkshopSession = async (workshopId: string, data: IWorkshopSession) => {
    return await post(`/api/v1/workshop/${workshopId}/session`, JSON.stringify(data));
};

export const removeWorkshopSessoion = async (id: string) => {
    return await post("/api/v1/workshop/:workshopId/remove/:sessionId", id);
};

export const updateWorkshopSession = async (workshopId: string, sessionId: string, data: IWorkshopSession) => {
    return await put(`/api/v1/workshop/${workshopId}/update/${sessionId}`, JSON.stringify(data));
};
