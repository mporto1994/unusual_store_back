import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import cartDelProdService from "../../services/cart/carrDelProd.services"


const cartDelProdController = async (req:Request, res:Response) => {
    try{
        const {product_id} = req.params
        const {userEmail} = req

        const cartDel = cartDelProdService(userEmail, product_id)
    
        return res.sendStatus(204).json(cartDel)
    }
    catch(err){
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}
export default cartDelProdController
