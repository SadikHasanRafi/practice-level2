import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const response = await StudentServices.insertSingleStudentIntoDB(req.body);
    res.status(200).json({
      success: true,
      message: 'Student is created successfully.',
      data: response,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const allStudents = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students are received successfully.',
      data: allStudents,
    });
  } catch (error) {
    console.log(error);
  }
};

const getStudentDetails = async (req: Request, res: Response) => {
  try {
    const studentDetails = await StudentServices.getStudentDetailsFromDB(
      req.params.id,
    );
    console.log(
      '🚀 ~ file: student.controller.ts:34 ~ getStudentDetails ~ studentDetails:',
      studentDetails,
    );
    res.status(200).json({
      success: true,
      message: 'Student details received successfully.',
      data: studentDetails,
    });
  } catch (error) {
    console.log(
      '🚀 ~ file: student.controller.ts:35 ~ getStudentDetails ~ error:',
      error,
    );
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getStudentDetails,
};
