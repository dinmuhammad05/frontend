import React from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/table';
import { Spinner } from '@/components/ui/spinner';
import { useStudentsList } from '../service/query/useStudents';

type studentType = {
  count: number;
  name: string;
  email: string;
  id?: string;
  isActive: 'Active' | 'Blocked';
  group: string;
};

export const StudentsForAdmin = () => {
  const { data, isLoading } = useStudentsList();

  const students: studentType[] = React.useMemo(() => {
    if (!Array.isArray(data?.data)) return [];
    return data.data.map((item, index) => ({
      count: index + 1,
      name: item.name,
      email: item.email,
      id: item.id,
      isActive: item.isActive ? 'Active' : 'Blocked',
      group: item.group.name,
    }));
  }, [data]);

  const columns: ColumnDef<studentType>[] = [
    {
      accessorKey: 'count',
      header: 'Count',
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'isActive',
      header: 'Status',
    },
    {
      accessorKey: 'group',
      header: 'Group',
    },
   
  ];

  return (
    <div className="">
      {isLoading ? (
        <Spinner className='size-8' />
      ) : (
        <DataTable columns={columns} data={students} />
      )}
    </div>
  );
};
