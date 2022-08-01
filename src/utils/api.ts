import axios, { AxiosResponse } from 'axios'

import { API_URL } from '@/configs'
import { IGateway, IProject, IReportRequest, IUser } from '@/types'

export const getUsers = (): Promise<AxiosResponse<Record<string, unknown>>> =>
  axios.get(`${API_URL}/users`)

// export const getUsers = (): Promise<AxiosResponse<IUser[]>> => axios.get(`${API_URL}/users`)

export const getProjects = (): Promise<AxiosResponse<IProject[]>> =>
  axios.get(`${API_URL}/projects`)

export const getGateways = (): Promise<AxiosResponse<IGateway[]>> =>
  axios.get(`${API_URL}/gateways`)

export const getPayments = (
  request: IReportRequest
): Promise<AxiosResponse<Record<string, unknown>>> =>
  axios.post(`${API_URL}/report`, request)
