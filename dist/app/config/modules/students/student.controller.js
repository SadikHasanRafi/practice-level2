"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const student_service_1 = require("./student.service");
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield student_service_1.StudentServices.insertSingleStudentIntoDB(req.body);
        res.status(200).json({
            success: true,
            message: 'Student is created successfully.',
            data: response,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getAllStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allStudents = yield student_service_1.StudentServices.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: 'Students are received successfully.',
            data: allStudents,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getStudentDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentDetails = yield student_service_1.StudentServices.getStudentDetailsFromDB(req.params.id);
        console.log('🚀 ~ file: student.controller.ts:34 ~ getStudentDetails ~ studentDetails:', studentDetails);
        res.status(200).json({
            success: true,
            message: 'Student details received successfully.',
            data: studentDetails,
        });
    }
    catch (error) {
        console.log('🚀 ~ file: student.controller.ts:35 ~ getStudentDetails ~ error:', error);
    }
});
exports.StudentController = {
    createStudent,
    getAllStudents,
    getStudentDetails,
};
