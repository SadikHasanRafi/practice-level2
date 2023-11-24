import { Student } from './student.interface';
import { StudentModel } from './student.model';

const insertSingleStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const allStudent = await StudentModel.find();
  return allStudent;
};

const getStudentDetailsFromDB = async (id: string) => {
  return await StudentModel.findOne({ id: id });
};

export const StudentServices = {
  insertSingleStudentIntoDB,
  getAllStudentsFromDB,
  getStudentDetailsFromDB,
};
