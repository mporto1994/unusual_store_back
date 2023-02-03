import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import cartAddProdService from "../../services/cart/cartAddProd.services";


const cartAddProdController = async(req:Request, res: Response)=> {
    try{
        const {userEmail} = req
        const {product_id} = req.body
        console.log("Antes do service")
        const cartAdd = await cartAddProdService(product_id,userEmail)
        console.log("Depois do service")

        res.json(cartAdd) 
    }
    catch(err){
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default cartAddProdController