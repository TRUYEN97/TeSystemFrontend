import { useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import EyeInvisibleOutlined from "@ant-design/icons/EyeInvisibleOutlined";
import EyeOutlined from "@ant-design/icons/EyeOutlined";

import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/CheckBox";

const SignUpForm = () => {
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
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
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <Label>
                      {t("sign_up_page.first_name")}
                      <span className="text-error-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <Label>
                      {t("sign_up_page.last_name")}
                      <span className="text-error-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <Label>
                    {t("sign_up_page.username")}
                    <span className="text-error-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="text"
                    name="text"
                    placeholder={t("sign_up_page.username_placeholder")}
                  />
                </div>

                <div>
                  <Label>
                    {t("sign_up_page.password")}
                    <span className="text-error-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      placeholder={t("sign_up_page.password_placeholder")}
                      type={showPassword ? "text" : "password"}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeOutlined className="size-5 [&>svg>path]:fill-gray-500 dark:[&>svg>path]:fill-gray-400" />
                      ) : (
                        <EyeInvisibleOutlined className="[&>svg>path]:fill-gray-500 dark:[&>svg>path]:fill-gray-400 size-5" />
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
                      placeholder={t(
                        "sign_up_page.confirm_password_placeholder",
                      )}
                      type={showPassword ? "text" : "password"}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeOutlined className="size-5 [&>svg>path]:fill-gray-500 dark:[&>svg>path]:fill-gray-400" />
                      ) : (
                        <EyeInvisibleOutlined className="[&>svg>path]:fill-gray-500 dark:[&>svg>path]:fill-gray-400 size-5" />
                      )}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Checkbox
                    className="w-5 h-5"
                    checked={isChecked}
                    onChange={setIsChecked}
                  />
                  <p className="inline-block font-normal text-gray-500 dark:text-gray-400">
                    {t("sign_up_page.terms_conditions")}{" "}
                    <span className="text-error-500">*</span>{" "}
                  </p>
                </div>

                <div>
                  <button className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">
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
