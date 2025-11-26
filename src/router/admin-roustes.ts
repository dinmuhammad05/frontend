import {  StudentsForAdmin} from "@/pages/admin/students/student";
import { TeachersForAdmin } from "@/pages/admin/teachers/teacher";

export default [
  {
    path: "teachers",
    page: TeachersForAdmin,
  },
  {
    path: "students",
    page: StudentsForAdmin,

  },
];
