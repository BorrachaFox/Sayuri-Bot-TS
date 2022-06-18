import express, { Request, Response } from 'express';

const app = express()

app.all('/', (req: Request, res: Response) => {
  return res.send('Sayuri is Alive!')
})

const keepAlive = () => {
  app.listen(3000, () => {
    console.log('Server is ready.')
  })
}

export default keepAlive