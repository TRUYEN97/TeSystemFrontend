import { Navigate, useParams } from "react-router-dom";

import PageMeta from "../../components/common/PageMeta";
import { ROUTE } from "../../constants/routes";
import Loading from "../../components/ui/effect/Loading";
import TeamDetail from "../../components/teams/TeamDetail";
import useGetTeamById from "../../hooks/api/teams/use-get-team-by-id";

const TeamPage = () => {
  const { id } = useParams();

  const { data: team, isLoading, isError } = useGetTeamById(id);
  
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
          Trang quản lý nhóm
        </h3>
        <div className="space-y-6">
          <TeamDetail team={team?.data.data} />
        </div>
      </div>
    </>
  );
};

export default TeamPage;
