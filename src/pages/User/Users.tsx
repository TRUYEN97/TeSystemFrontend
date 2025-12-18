import { Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Link } from "react-router-dom";

import type { UserType } from "../../types/users";
import useGetUsers from "../../hooks/api/users/use-get-users";
import Button from "../../components/ui/button/Button";
import { ROUTE } from "../../constants/routes";
import Loading from "../../components/ui/effect/Loading";
import { useState } from "react";

const columns: TableProps<UserType>["columns"] = [
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
      <Link to={`/users/${record.id}`}>{record.name}</Link>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Teams",
    key: "teams",
    render: (_, record) =>
      record.teams?.map((team) => (
        <span className="mx-1">
          <Tag color="blue-inverse" variant="outlined">
            {team.name}
          </Tag>
        </span>
      )),
  },
];

const UsersPage = () => {
  const { data: users, isLoading } = useGetUsers();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="pb-4">
        <Link to={ROUTE.NEW_USER}>
          <Button className="px-8">Thêm người dùng</Button>
        </Link>
      </div>
      <Table<UserType>
        columns={columns}
        dataSource={users?.data.data}
        pagination={{ pageSize: pageSize }}
      />
    </div>
  );
};

export default UsersPage;
