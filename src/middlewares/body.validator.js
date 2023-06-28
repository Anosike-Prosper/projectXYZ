const {AppError}= require('../error/appError')


const validateBody = (schema) => {
    return (req, res, next) => {
      const result = schema.validate(req.body);
    
  
      if (result.error) {
        throw new AppError(result.error.message, 400)
        
      }
      
  
      next();

    };
  };


  module.exports= {validateBody}