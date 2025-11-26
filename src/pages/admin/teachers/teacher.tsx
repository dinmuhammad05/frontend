import React from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/table';
import { useTeachersList } from '../service/query/useTeachers';
import { Spinner } from '@/components/ui/spinner';

type teacherType = {
  count: number;
  name: string;
  id?: string;
  specification: string;
  isActive: 'Active' | 'Blocked';
  groups: number;
  username: string;
};

export const TeachersForAdmin = () => {
  const { data, isLoading } = useTeachersList();

  const teachers: teacherType[] = React.useMemo(() => {
    if (!Array.isArray(data?.data)) return [];
    return data.data.map((item, index) => ({
      groups: item.groups?.length || 0,
      id: item.id,
      count: index + 1,
      isActive: item.isActive ? 'Active' : 'Blocked',
      name: item.name,
      specification: item.specification,
      username: item.username,
    }));
  }, [data]);

  const columns: ColumnDef<teacherType>[] = [
    {
      accessorKey: 'count',
      header: 'Count',
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'specification',
      header: 'Specification',
    },
    {
      accessorKey: 'username',
      header: 'Username',
    },
    {
      accessorKey: 'groups',
      header: 'Groups',
    },
    {
      accessorKey: 'isActive',
      header: 'Status',
    },
  ];

  return (
    <div className="">
      {isLoading ? (
        <Spinner />
      ) : (
        <DataTable columns={columns} data={teachers} />
      )}
    </div>
  );
};
