import { axiosClient } from "./services/axios-client";
import type { SignUpRequestType } from "../types/auth";

export const register = async (data: SignUpRequestType) => {
    return await axiosClient.post('api/auth/register', data)
}