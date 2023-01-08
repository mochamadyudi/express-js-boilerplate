import ErrorHandler from './error.handler'

export default (app)=> {
  app.use(ErrorHandler)
}