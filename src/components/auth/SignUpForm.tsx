import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

import useSignUpForm from "../../hooks/component/auth/use-sign-up-form";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/CheckBox";
import { checkInputFieldHasError } from "../../utils/auth";


const SignUpForm = () => {
  const { t } = useTranslation();

  const {
    showPassword,
    setShowPassword,
    signUpInputData,
    handleChangeInputData,
    handleConfirmPolicy,
    signUpInputError,
    handleSubmitRegister,
  } = useSignUpForm();

  return (
    <div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar">
      <div className="w-full max-w-md mx-auto mb-5 sm:pt-10"></div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              {t("sign_up_page.title")}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("sign_up_page.description")}
            </p>
          </div>
          <div>
            <div className="relative py-3 sm:py-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
              </div>
            </div>
            <form>
              <div className="space-y-5">
                <div className="sm:col-span-1">
                  <Label>
                    {t("sign_up_page.full_name")}
                    <span className="text-error-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder={t("sign_up_page.full_name_placehoder")}
                    value={signUpInputData?.fullname}
                    onChange={handleChangeInputData}
                    error={checkInputFieldHasError(signUpInputError?.fullname)}
                    hint={checkInputFieldHasError(signUpInputError?.fullname) ? t(`${signUpInputError?.fullname}`) : undefined}
                  />
                </div>

                <div>
                  <Label>
                    {t("sign_up_page.username")}
                    <span className="text-error-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    placeholder={t("sign_up_page.username_placeholder")}
                    value={signUpInputData?.username}
                    onChange={handleChangeInputData}
                    error={checkInputFieldHasError(signUpInputError?.username)}
                    hint={checkInputFieldHasError(signUpInputError?.username) ? t(`${signUpInputError?.username}`) : undefined}
                  />
                </div>

                <div>
                  <Label>
                    {t("sign_up_page.password")}
                    <span className="text-error-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      name="password"
                      placeholder={t("sign_up_page.password_placeholder")}
                      type={showPassword ? "text" : "password"}
                      value={signUpInputData?.password}
                      onChange={handleChangeInputData}
                      error={checkInputFieldHasError(signUpInputError?.password)}
                      hint={checkInputFieldHasError(signUpInputError?.password) ? t(`${signUpInputError?.password}`) : undefined}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <LuEye className="size-5 text-gray-500 dark:text-gray-400" />
                      ) : (
                        <LuEyeOff className="size-5 text-gray-500 dark:text-gray-400" />
                      )}
                    </span>
                  </div>
                </div>

                <div>
                  <Label>
                    {t("sign_up_page.confirm_password")}
                    <span className="text-error-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      name="confirmPassword"
                      placeholder={t(
                        "sign_up_page.confirm_password_placeholder",
                      )}
                      type={showPassword ? "text" : "password"}
                      value={signUpInputData?.confirmPassword}
                      onChange={handleChangeInputData}
                      error={checkInputFieldHasError(signUpInputError?.confirmPassword)}
                      hint={checkInputFieldHasError(signUpInputError?.confirmPassword) ? t(`${signUpInputError?.confirmPassword}`) : undefined}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <LuEye className="size-5 text-gray-500 dark:text-gray-400" />
                      ) : (
                        <LuEyeOff className="size-5 text-gray-500 dark:text-gray-400" />
                      )}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Checkbox
                    className="w-5 h-5"
                    checked={signUpInputData?.policyConfirmed || false}
                    onChange={handleConfirmPolicy}
                  />
                  <p className="inline-block font-normal text-gray-500 dark:text-gray-400">
                    {t("sign_up_page.terms_conditions")}{" "}
                    <span className="text-error-500">*</span>{" "}
                  </p>
                </div>

                <div>
                  <button className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600"
                    onClick={e => handleSubmitRegister(e)}
                  >
                    {t("sign_up_page.sign_up_button")}
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                {t("sign_up_page.have_account")} {""}
                <Link
                  to="/login"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  {t("sign_up_page.sign_in_link")}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
