import { first } from 'lodash'
import { isCelebrateError } from 'celebrate'

const ErrorHandler = async (err, req, res, next) => {
  const { status } = err
  const msg = err?.message ?? null
  if (typeof (msg) === 'string') {
    err.message = `${msg}`.replace(/"/g, '')
  }

  const errObj = {
    status: status || 500,
    code: '',
    message: err?.message,
    error: err
  }
  if (err.name === 'SequelizeUniqueConstraintError') {
    errObj.status = 400
    errObj.code = 'ERR_UNIQUE_CONSTRAINT'
    errObj.error = err?.message ?? err?.sql
  } else if (err.name === 'UnauthorizedError') {
    errObj.status = 401
    errObj.code = 'ERR_UNAUTHORIZED'
    errObj.error = 'You don\'t have permission to do that. Sorry!'
  } else if (err.name === 'ValidationError') {
    errObj.code = 'ERR_VALIDATION'
    errObj.error = 'Validation Failed'
    errObj.status = 400
  } /* Handle Joi Validation */ else if (isCelebrateError(err)) {
    errObj.status = err.output.statusCode
    errObj.code = err?.name
    errObj.error = 'Validation Failed'
  }
  res.status(errObj.status)
  delete errObj.status
  return res.json(errObj)
}

export default ErrorHandler