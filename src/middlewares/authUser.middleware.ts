import {Request, Response, NextFunction} from "express"
import jwt from "jsonwebtoken"


const authUserMiddleware = (req:Request,res:Response, next: NextFunction)=>{
    try{
        const token = req.headers.authorization
        console.log(token)
        jwt.verify(token as string, process.env.JWT_SECRET as string, (err:any, decoded:any)=>{
            req.userEmail = decoded.email
            console.log("Aqui    --------------",req.userEmail)
            next()
        })
    }catch(err){
        res.status(400).json({message:"Invalid Token"})
    }
}
export default authUserMiddleware