import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";



import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/CheckBox";
import Button from "../ui/button/Button";

const SignInForm = () => {
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              {t("log_in_page.title")}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("log_in_page.description")}
            </p>
          </div>
          <div>
            <form>
              <div className="space-y-6">
                <div>
                  <Label>
                    {t("log_in_page.username")}{" "}
                    <span className="text-error-500">*</span>{" "}
                  </Label>
                  <Input placeholder="V123456" />
                </div>
                <div>
                  <Label>
                    {t("log_in_page.password")}{" "}
                    <span className="text-error-500">*</span>{" "}
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder={t("log_in_page.placehoder_password")}
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
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                    <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                      {t("log_in_page.remember_me")}
                    </span>
                  </div>
                  <Link
                    to="/reset-password"
                    className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                  >
                    {t("log_in_page.forgot_password")}
                  </Link>
                </div>
                <div>
                  <Button className="w-full" size="sm">
                    {t("log_in_page.sign_in_button")}
                  </Button>
                </div>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                {t("log_in_page.no_account")} {""}
                <Link
                  to="/signup"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  {t("log_in_page.sign_up_link")}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
