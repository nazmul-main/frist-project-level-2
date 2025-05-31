import express, { Application, Request, Response } from 'express'
import { studentRoutes } from './app/modules/student/student.route'
const app: Application = express()

app.use(express.json());

// application routes 
app.use('/api/v1/students', studentRoutes)

const getAController = (req: Request, res: Response) => {
  const a = 20
  res.send(a)
}

app.get('/')
console.log(process.cwd())
export default app
