import { useState } from 'react';
import { Space, Table } from 'antd';
import type { TableProps } from 'antd';
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
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

const UsersPage = () => {
  const {data: users} = useGetUsers();

  return <Table<UserType> columns={columns} dataSource={users?.data.data} />
}

export default UsersPage;
