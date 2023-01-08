export default (app)=> {
  app.get('/auth', (req,res)=>{
    return res.status(200).send(`OK! <pre>${JSON.stringify(req.headers,0,2)}</pre>`)
  })
}