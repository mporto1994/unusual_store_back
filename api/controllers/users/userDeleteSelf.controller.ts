import { Request, Response } from "express"
import userDeleteSelfService from "../../services/users/userDeleteSelf.services"

const userDeleteSelfController = (req:Request, res:Response)=>{
    const email = req.userEmail
    try{
        const user = userDeleteSelfService(email)

        return res.status(203).json({
            message:"Your Account has being deleted!",
            user:user})
    }catch(error){
        if(error instanceof Error){
            return res.status(400).send({
                error:error.name,
                message:error.message
            })
        }
    }
}
export default userDeleteSelfController