import AuthLayout from "../../layout/AuthLayout";
import SignInForm from "../../components/auth/SignInForm";
import PageMeta from "../../components/common/PageMeta";

const Login = () => {
  return (
    <>
      <PageMeta
        title="SignIn Dashboard"
        description="This is React.js SignIn Tables Dashboard page "
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
};

export default Login;
