const {AuthService,getUserByEmail} = require('./auth.service')
const {StatusCodes} = require('http-status-codes')
const {createToken} = require('../../utils/helper')
const { userModel } = require('../../models/user')


const signUp= async(req,res)=>{

    // console.log('this is the req', req.body)
    // const {fullname, username, email, password}= req.body

    const user= await AuthService.createUser(req.body)
    user.password= undefined

    return res.status(StatusCodes.CREATED).json({user})

}


const login= async(req,res, next)=>{

    console.log(req.body)
    
        const { email, password } = req.body;
      
        try {
          if (!email || !password) {
            throw new AppError(
              "Please provide email and password",
              StatusCodes.BAD_REQUEST
            );
          }
      
          const user = await userModel.findOne({email}).select('+password')
          console.log(user)
      
          if (!user || !(await user.correctPassword(password, user.password))) {
            throw new AppError(
              "Incorrect Email or Password",
              StatusCodes.UNAUTHORIZED
            );
          }
      
          const token = createToken(user.id);
      
          return res.status(StatusCodes.OK).json({
            message: "Login Successful",
            status: true,
            token: token,
          });
        } catch (err) {
          next(err);
}
        
      

}


module.exports={signUp, login}