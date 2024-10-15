const Joi = require('joi');

const signupSchema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
});

const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

const updateProfileSchema = Joi.object({
  firstname: Joi.string(),
  lastname: Joi.string(),
  birthdate: Joi.date(),
  address: Joi.string(),
  address_number: Joi.string(),
  postal_code: Joi.string(),
  city: Joi.string(),
  country: Joi.string(),
  phone: Joi.string(),
  email: Joi.string().email(),
  photo: Joi.string()
});

exports.validateSignup = (req, res, next) => {
  const { error } = signupSchema.validate(req.body);
  if (error) return res.status(400).json({ status: 'fail', message: error.details[0].message });
  next();
};

exports.validateSignin = (req, res, next) => {
  const { error } = signinSchema.validate(req.body);
  if (error) return res.status(400).json({ status: 'fail', message: error.details[0].message });
  next();
};

exports.validateUpdateProfile = (req, res, next) => {
  const { error } = updateProfileSchema.validate(req.body);
  if (error) return res.status(400).json({ status: 'fail', message: error.details[0].message });
  next();
};