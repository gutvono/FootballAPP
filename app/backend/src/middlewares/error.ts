import { ErrorRequestHandler } from 'express';
import Exception from '../utils/http.exception';

const ErrorMiddleware: ErrorRequestHandler = (err, req, res, _next) => {
  console.log('entrou no middleware');
  if (err instanceof Exception) {
    console.log('entrou no if');
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(500).json({ message: err.message });
};

export default ErrorMiddleware;
