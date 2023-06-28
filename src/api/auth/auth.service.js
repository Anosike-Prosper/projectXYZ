
const {userModel} = require('../../models/user')
const {AppError}= require('../../error/appError') 
const {StatusCodes}= require('http-status-codes')


class AuthService{
   static async createUser(data){
const userExist = await userModel.findOne({email:data.email})

if(userExist){
    throw new AppError(
        "user with this email already exist",
        StatusCodes.CONFLICT
      );
}

return await userModel.create(data)


   }


//    static async loginUser(data){

//     if(!data.email || data.password){
//         throw new AppError(
//             "Please provide email and password",
//             StatusCodes.BAD_REQUEST
//           );
//     }
//     const userExist = await userModel.findOne({email:data.email})
    
//     if(userExist){
//         throw new AppError(
//             "user with this email already exist",
//             StatusCodes.CONFLICT
//           );
//     }
    
//     return await userModel.create(data)
    
    
//        }

}

const getUserByEmail = async (email) => {
    const user = await userModel.findOne({ email });
    return user;
  };


module.exports = {AuthService, getUserByEmail}