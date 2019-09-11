import { get } from "./core/fetch";
import { WorkshopDetails } from "../domains/workshopDetails.domain";

export const getCurrentWorkshops = async (): Promise<any> => {
	return await get("/api/v1/workshop/current");
};

export const getArchivedWorkshops = async (): Promise<any> => {
	return await get("/api/v1/workshop/archived");
};

export const postWorkshop = async (workshop: WorkshopDetails) => {
	return await post("/api/v1/workshop/archived", JSON.stringify(workshop));
};
