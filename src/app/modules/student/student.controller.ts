import { Student } from './student.interface'
import { Request, Response } from 'express'
import { StudentServices } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body
    //will call service func to send this data
    const result = StudentServices.createStudentIntoDB(studentData)

    // send Response
    res.status(200).json({
      success: true,
      massege: 'Student create Succesfully ',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getstudentsFromDB()

    // Send Response
    res.status(200).json({
      success: true,
      message: 'Students fetched successfully',
      data: result,
    })
  } catch (err) {
    console.error(err)
  }
}

// single studemt controller
const getSinglStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.getSinglestudentsFromDB(studentId)
    res.status(200).json({
      success: true,
      message: 'Students fetched successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const studentControllers = {
  createStudent,
  getAllStudents,
  getSinglStudent,
}
