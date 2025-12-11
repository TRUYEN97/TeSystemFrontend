import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { register } from "../../../api/auth";
import type { SignUpRequestType } from "../../../types/auth";
import { ROUTE } from "../../../constants/routes";

const useSignUp = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const mutation = useMutation({
        mutationFn: async (data: SignUpRequestType) => {
            return await register(data); 
        },
        onSuccess: () => {
            toast(t("sign_up_page.message.success"), {
                type: 'success',
                autoClose: 2000,
                position: 'top-center'
            })
            setTimeout(() => {
                navigate(ROUTE.LOGIN)
            }, 2000)
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

export default useSignUp;