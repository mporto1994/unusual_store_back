
import { Request, Response } from "express";
import userUpdatePasswordService from "../../services/users/userUpdatePassword.services";

const userUpdatePasswordController = async (req:Request, res:Response)=> {
    try{
        const email = req.userEmail
        const {password} = req.body
        
        if(!password){
            throw new Error("Password must be informed!")
        }

        const user = await userUpdatePasswordService(email,password)

        return res.status(200).json({
            message:"The password was changed sucessfully",
            user:user
        })

    }catch(err){
        if(err instanceof Error){
            return res.status(401).send({
                error: err.name,
                message: err.message,
            });
        }
    }
}
export default userUpdatePasswordController