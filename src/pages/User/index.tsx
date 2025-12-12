import { Button, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { Link } from 'react-router-dom';

import type { UserType } from '../../types/users';
import useGetUsers from '../../hooks/api/users/use-get-users';

const columns: TableProps<UserType>['columns'] = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (_, record) => <Link to={`/users/${record.id}`}>{record.name}</Link>
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: "Teams",
    key: 'teams',
    render: (_, record) => (
      record.teams?.map((team) => (
        <Tag color='blue-inverse' variant='outlined'>{team.name}</Tag>
      ))
    )
  }
];

const UsersPage = () => {
  const { data: users } = useGetUsers();

  return <Table<UserType> columns={columns} dataSource={users?.data.data} />
}

export default UsersPage;
