import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup'

interface ValidationErrors {
  [key: string]: string[]
}

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    let errors: ValidationErrors = {}

    err.inner.forEach(err => {
      errors[err.path] = err.errors
    })

    return res.status(400).json({ message: 'Validation Error', errors })
  }

  console.error(err)

  return res.status(500).json({ message: 'Internal Server Error' })
}

export default errorHandler
