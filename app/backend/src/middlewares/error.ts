import { ErrorRequestHandler } from 'express';
import Exception from '../utils/http.exception';

const ErrorMiddleware: ErrorRequestHandler = (err, req, res, _next) => {
  if (err instanceof Exception) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(500).json({ message: err.message });
};

export default ErrorMiddleware;
