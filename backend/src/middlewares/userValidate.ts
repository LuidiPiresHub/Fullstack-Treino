import { Request, Response, NextFunction } from 'express';
import userSchema from '../schemas/user';

const userValidate = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { name } = req.body
  const { error } = userSchema.validate({ name })
  if (error) return res.status(400).json({ message: error.details[0].message })
  return next();
};

export default userValidate;
