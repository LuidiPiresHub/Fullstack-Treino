import { Request, Response, NextFunction } from 'express';

const userValidate = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'User is Required' });
  if (name.match(/^[0-9]/)) return res.status(422).json({ message: 'User needs to be a text' });
  if (name.length < 3) return res.status(422).json({ message: 'Name should have at least 3 characters' });
  return next();
};

export default userValidate;
