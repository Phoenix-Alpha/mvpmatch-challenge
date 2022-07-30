import axios, { AxiosResponse } from "axios";

import { API_URL } from "@/configs";

export const getUsers = (): Promise<AxiosResponse<Record<string, unknown>>> => axios.get(`${API_URL}/users`)

// export const getProjects = (): Promise<AxiosResponse<IUser[]>> => axios.get(`${API_URL}/users`)