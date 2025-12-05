import { useTranslation } from "react-i18next";

import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "../../layout/AuthLayout";
import SignUpForm from "../../components/auth/SignUpForm";

export default function SignUp() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta
        title={t("sign_up_page.meta_title") || "Sign Up"}
        description={
          t("sign_up_page.meta_description") ||
          "Create a new account to get started!"
        }
      />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  );
}
