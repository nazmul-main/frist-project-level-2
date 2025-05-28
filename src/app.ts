import express, { Application, Request, Response } from 'express'
const app: Application = express()

const getAController =  (req: Request, res: Response) => {
  const a = 20

  res.send(a)
}

app.get('/')
console.log(process.cwd())
export default app
