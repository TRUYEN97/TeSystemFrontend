import { useState, type ChangeEvent, type FormEvent } from "react";

import type {
  LoginInputErrorType,
  LoginInputType,
  LoginRequestType,
} from "../../../types/auth";
import useLogin from "../../api/auth/login/use-login";

const useLoginForm = () => {
  const login = useLogin();

  const [showPassword, setShowPassword] = useState(false);
  const [loginInput, setLoginInput] = useState<LoginInputType>();
  const [loginInputError, setLoginInputError] = useState<LoginInputErrorType>();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const verifyDataInput = (): boolean => {
    setLoginInputError(undefined);

    if (!loginInput?.username) {
      setLoginInputError((prev) => {
        return {
          ...prev,
          username: "log_in_page.error.empty_username",
        };
      });
      return true;
    }
    if (!loginInput?.password) {
      setLoginInputError((prev) => {
        return {
          ...prev,
          password: "log_in_page.error.empty_password",
        };
      });
    }
    return false;
  };

  const handleSubmit = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (verifyDataInput()) return;

    const data: LoginRequestType = {
      username: loginInput?.username || "",
      password: loginInput?.password || "",
    };

    await login.mutate(data);
  };

  return {
    showPassword,
    setShowPassword,
    loginInput,
    loginInputError,
    handleInputChange,
    handleSubmit,
  };
};

export default useLoginForm;
