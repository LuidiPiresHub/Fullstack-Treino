import Joi from "joi";

const regex = /^[^0-9].*$/;

const userSchema = Joi.object({
  name: Joi.string().pattern(regex).min(3).required(),
});

export default userSchema;
