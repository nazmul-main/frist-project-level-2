import { StudentModel } from "../student.models";
import { Student } from "./student.interface";

const createStudentIntoDB = async (student: Student) => {
    const result = await StudentModel.create(student)
    return result
}
const getstudentsFromDB = async () => {
    const result = await StudentModel.find()
    return result
}



export const StudentServices = { createStudentIntoDB, getstudentsFromDB }