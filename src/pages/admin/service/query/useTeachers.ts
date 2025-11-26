import { useQuery } from "@tanstack/react-query";
import { api, type IResponsePagination } from "@/config";
import type { IGetAllTeachers } from "../../type";

export const useTeachersList = () => {
  return useQuery({
    queryKey: ["teacher_list"],
    queryFn: () =>
      api.get<IResponsePagination<IGetAllTeachers>>("/teacher").then((res) => res.data),
  });
};
