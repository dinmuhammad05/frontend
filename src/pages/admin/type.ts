export interface IGetAllTeachers {
  createdAt: string;
  groups: {
    createdAt: string;
    id: string;
    isActive: boolean;
    isDeleted: boolean;
    lessonTime: string;
    name: string;
    teacherId: string;
    updatedAt: string;
  }[];
  id: string;
  isActive: boolean;
  isDeleted: boolean;
  name: string;
  password: string;
  role: string;
  specification: string;
  updatedAt: string;
  username: string;
}

export interface IGetAllStudents {
  id: string;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  name: string;
  email: string;
  password: string;
  role: string;
  groupId: string;
  group: {
    id: string;
    isActive: boolean;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    name: string;
    lessonTime: string;
    teacherId: string;
  };
}
