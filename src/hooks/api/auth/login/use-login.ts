import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { login } from "../../../../api/auth";
import type { LoginRequestType } from "../../../../types/auth";
import { ROUTE } from "../../../../constants/routes";
import { STORAGE_TOKEN } from "../../../../constants/token";
import { storeToken } from "../../../../utils/token";

const useLogin = () => {
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: async (data: LoginRequestType) => {
            return await login(data); 
        },
        onSuccess: (reponse) => {
            navigate(ROUTE.HOME)
            storeToken(STORAGE_TOKEN.ACCESS_TOKEN, reponse.data.data.accessToken);
            storeToken(STORAGE_TOKEN.REFRESH_TOKEN, reponse.data.data.refreshToken);
        },
        onError: (error: {response: { data: {message: string}}}) => {
            toast(error.response.data.message, {
                type: 'error',
                autoClose: 3000,
                position: 'top-center'
            })
        },
    })

    return mutation;
}

export default useLogin;