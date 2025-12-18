import { Table} from "antd";
import type { TableProps } from "antd";
import { Link } from "react-router-dom";

import useGetUsers from "../../hooks/api/users/use-get-users";
import Button from "../../components/ui/button/Button";
import { ROUTE } from "../../constants/routes";
import Loading from "../../components/ui/effect/Loading";
import { useState } from "react";
import type { TeamType } from "../../types/teams";
import useGetTeams from "../../hooks/api/teams/use-get-teams";

const columns: TableProps<TeamType>["columns"] = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (_, record) => (
      <Link to={`/teams/${record.id}`}>{record.name}</Link>
    ),
  },
  {
    title: "Số thành viên",
    dataIndex: "memberCount",
    key: "member-count",
  },
];

const TeamsPage = () => {
  const { data: teams, isLoading } = useGetTeams();

  const [pageSize, setPageSize] = useState(15);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="pb-4">
        <Link to={ROUTE.NEW_USER}>
          <Button className="px-8">Thêm nhóm</Button>
        </Link>
      </div>
      <Table<TeamType>
        columns={columns}
        dataSource={teams?.data.data}
        pagination={{ pageSize: pageSize }}
      />
    </div>
  );
};

export default TeamsPage;
