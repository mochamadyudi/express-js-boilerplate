import express from 'express'
const route = express();
export default (app)=> {
  app.use('/auth',route)
  route.get('/test', async (req,res)=> {
    return res.status(200).send('testing bois')
  })
}