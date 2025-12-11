import { useTranslation } from "react-i18next";

import AuthLayout from "../../layout/AuthLayout";
import SignInForm from "../../components/auth/SignInForm";
import PageMeta from "../../components/common/PageMeta";

const Login = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta
        title={t("log_in_page.meta_title")}
        description={t("log_in_page.meta_description")}
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
};

export default Login;
