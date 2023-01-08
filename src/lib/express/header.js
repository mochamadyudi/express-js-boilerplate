import express from 'express'

export default class ExpressHeader {
  constructor (app = express()) {
    return this.getInstance(app)
  }

  getInstance(app){
    return new Promise((resolve,reject)=> {
      app.use((req, res, next) => {
        res.header('Access-Control-Allow-Headers', ['Content-Disposition', 'Origin', 'Content-Type', 'Accept', 'Authorization'])
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
        res.header('Access-Control-Allow-Credentials', 'true')
        next()
      })
      resolve()
    })
  }
}