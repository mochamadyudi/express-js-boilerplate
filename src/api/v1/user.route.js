export default (app)=> {
  app.get('/user', async(req,res)=> {
    return res.status(200).json('ok')
  })
  app.get('/user/list', async (req,res)=> {
    return res.status(200).send(`<pre>${JSON.stringify(req.headers,0,2)}</pre>`)
  })
}