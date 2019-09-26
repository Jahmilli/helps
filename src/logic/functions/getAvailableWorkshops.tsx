import { get, post } from "./core/fetch";
import { Workshop } from "../domains/workshopDetails.domain";

export const getCurrentWorkshops = async (): Promise<any> => {
	return await get("/api/v1/workshop/current");
};

export const getArchivedWorkshops = async (): Promise<any> => {
    return await get("/api/v1/workshop/archived");
};

export const postWorkshop = async (data: Array<Workshop>) => {
    return await post("/api/v1/workshop/current/create", JSON.stringify(data));
};

export const setWorkshopToArchive = async (data: Workshop) => {
    return await post("/api/v1/workshop/archiveWorkshop", JSON.stringify(data));
};

export const setWorkshopToCurrent = async (data: Workshop) => {
    return await post("/api/v1/workshop/unarchiveWorkshop", JSON.stringify(data));
};