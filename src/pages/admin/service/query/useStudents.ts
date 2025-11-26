import { api, type IResponsePagination } from '@/config';
import { useQuery } from '@tanstack/react-query';
import type { IGetAllStudents } from '../../type';

export const useStudentsList = () => {
  return useQuery({
    queryKey: ['student_list'],
    queryFn: () =>
      api
        .get<IResponsePagination<IGetAllStudents>>('/student')
        .then((res) => res.data),
  });
};
