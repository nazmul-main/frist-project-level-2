import express from 'express'
import { studentControllers } from './student.controller'

const router = express.Router()

//will call controller function

router.post('/create-student', studentControllers.createStudent)
router.get('/', studentControllers.getAllStudents)
router.get('/:studentId', studentControllers.getSinglStudent)

export const studentRoutes = router //Route is a obj that's why not wrap this time in {}
