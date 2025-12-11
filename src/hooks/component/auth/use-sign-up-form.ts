import { useState, type ChangeEvent, type FormEvent } from "react";

import type { SignUpInputErrorType, SignUpInputType } from "../../../types/auth";
import vi from "../../../locales/vi";

const useSignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [signUpInputData, setSignUpInputData] = useState<SignUpInputType>();
    const [signUpInputError, setSignUpInputError] = useState<SignUpInputErrorType>()

    const handleChangeInputData = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setSignUpInputData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleConfirmPolicy = (value: boolean) => {
    setSignUpInputData({
      ...signUpInputData,
      policyConfirmed: value
    })
  }

  const verifyDataInput = (): boolean => {
    setSignUpInputError(undefined)

    if (!signUpInputData?.fullname) {
        setSignUpInputError((prev) => {
            return {
                ...prev,
                fullname: vi.translation.sign_up_page.error.empty_fullname
            }
        })
        return true;
    }
    if (!signUpInputData?.username) {
        setSignUpInputError((prev) => {
            return {
                ...prev,
                username: vi.translation.sign_up_page.error.empty_username
            }
        })
        return true
    }
    if (!signUpInputData?.password) {
        setSignUpInputError((prev) => {
            return {
                ...prev,
                password: vi.translation.sign_up_page.error.empty_passoword
            }
        })
        return true
    }
    if (!signUpInputData?.confirmPassword) {
        setSignUpInputError((prev) => {
            return {
                ...prev,
                confirmPassword: vi.translation.sign_up_page.error.empty_confirm_password
            }
        })
        return true
    }
    if (signUpInputData.confirmPassword !== signUpInputData.password) {
        setSignUpInputError((prev) => {
            return {
                ...prev,
                confirmPassword: vi.translation.sign_up_page.error.password_and_confirm_not_match
            }
        })
        return true
    }
    console.log(signUpInputError)
    return false;
  }

    const handleSubmitRegister = ( e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (verifyDataInput()) return;
       // TODO: request register to backend
    }

  return {
    showPassword,
    setShowPassword,
    signUpInputData,
    handleChangeInputData,
    handleConfirmPolicy,
    signUpInputError,
    handleSubmitRegister
  }
}

export default useSignUpForm;