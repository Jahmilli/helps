const AUTH_TOKEN = "access_token";
export type Options = {};

// Will be used with the JWT token
export type AuthToken = {
	type: string;
	name: string;
	value: string;
	expires: string;
};

// generic get request
export const get = async (url: string, options?: Options) => {
	return await coreFetch(url, options);
};

// generic post request
export const post = async (url: string, payload: any, options?: Options) => {
	return await coreFetch(url, options, "post", payload);
};

// generic put request
export const put = async (url: string, payload: any, options?: Options) => {
	return await coreFetch(url, options, "put", payload);
};

// generic delete request
export const remove = async (url: string, id: string, options?: Options) => {
	url = url + "/" + id;
	return await coreFetch(url, options, "delete");
};

const coreFetch = async (url: string, options?: Options, method: string = "get", body?: any) => {
	const headers = new Headers();
	headers.append("Content-Type", "application/json");
	const init = { headers };

	if (method === "post" || method === "put") {
		Object.assign(init, { body, method, headers });
	}

	return new Promise(async (resolve, reject) => {
		let response = undefined;
		if (options) {
			response = await fetch(url, { headers });
		} else {
			response = await fetch(url, init);
		}
		if (response.ok) {
			resolve(response.json());
		} else {
			reject(response.status);
		}
	});
};

// Will be used to get the JWT token
const getAuthToken = (): string => {
	let authToken: string | null = localStorage.getItem(AUTH_TOKEN);
	return authToken != null ? (JSON.parse(authToken) as AuthToken).value : "";
};
