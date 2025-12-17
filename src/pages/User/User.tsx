import UserInfoCard from "../../components/user-profile/UserProfile";
import PageMeta from "../../components/common/PageMeta";
import { Navigate, useParams } from "react-router-dom";
import useGetUserById from "../../hooks/api/users/use-get-user-by-id";
import { ROUTE } from "../../constants/routes";
import Loading from "../../components/ui/effect/Loading";

const UserProfiles = () => {
  const { id } = useParams();

  const { data: user, isLoading, isError } = useGetUserById(id);

  if (isLoading) return <Loading />;

  if (isError) {
    return <Navigate to={ROUTE.NOT_FOUND} replace />;
  }

  return (
    <>
      <PageMeta
        title="Profile Dashboard"
        description="This is  Profile Dashboard page"
      />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Trang quản lý user
        </h3>
        <div className="space-y-6">
          <UserInfoCard user={user?.data.data} />
        </div>
      </div>
    </>
  );
};

export default UserProfiles;
