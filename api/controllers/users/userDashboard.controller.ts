import { Request, Response } from "express";
import userDashboardService from "../../services/users/userDashboard.services";


const userDashboardController = async (req:Request, res:Response) => {
    try{
        const email = req.userEmail;
        const user = await userDashboardService(email)

        return res.status(200).send(user)
    
    }catch(err){
        if(err instanceof Error){
            return res.status(401).send({
                error: err.name,
                message: err.message,
            });
        }
    }
}
export default userDashboardController