import { get, post, put } from "./core/fetch";
import { Workshop } from "../domains/workshopDetails.domain";

export const getWorkshops = async (): Promise<any> => {
	return await get("/api/v1/workshop/current");
};

export const postWorkshop = async (data: Workshop) => {
	return await post("/api/v1/workshop/current/create", JSON.stringify(data));
};

export const removeWorkshop = async (id: string) => {
	return await post("/api/v1/workshop/remove", id);
};

export const updateWorkshop = async (id: string, data: Workshop) => {
	return await put(`/api/v1/workshop/update/${id}`, JSON.stringify(data));
};
