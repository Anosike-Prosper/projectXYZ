const joi = require("joi");



const signupSchema = joi.object().keys({
    fullname: joi
    .string()
    .trim()
    .required()
    .error(new Error("Provide a fullname")),
    username: joi
    .string()
    .trim()
    .required()
    .error(new Error("Provide a username")),
    email: joi
    .string()
    .email()
    .trim()
    .required()
    .error(new Error("Provide a valid email address")),
  password: joi
    .string()
    .trim()
    .required()
    .error(new Error("Provide a Passowrd")),

  // confirmPassword: joi
  //   .string()
  //   .min(8)
  //   .trim()
    
  //   .valid(joi.ref('password')).required()
  //   .error(new Error("confirmPassword must match password")),
});


const loginSchema = joi.object().keys({
  email: joi
    .string()
    .email()
    .trim()
    .required()
    .error(new Error("Provide valid email address")),
  password: joi
    .string()
    .min(8)
    .trim()
    .required()
    .error(new Error("Password must be at least 8 characters")),
});



module.exports ={signupSchema, loginSchema}