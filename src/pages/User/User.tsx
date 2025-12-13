import UserInfoCard from "../../components/user-profile/UserProfile";
import PageMeta from "../../components/common/PageMeta";
import { useParams } from "react-router-dom";
import useGetUserById from "../../hooks/api/users/use-get-user-by-id";

const UserProfiles = () => {
  const { id }  = useParams();

  const {data: user, isLoading} = useGetUserById(id);
  console.log("re-render", user?.data.data.name)

  if(isLoading) return <>Loading...</>

  return (
    <>
      <PageMeta
        title="React.js Profile Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Profile Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Trang quản lý user
        </h3>
        <div className="space-y-6">
          <UserInfoCard user={user?.data.data}/>
        </div>
      </div>
    </>
  );
}

export default UserProfiles;
