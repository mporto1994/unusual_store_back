import { Request, Response } from "express"
import { IProduct } from "../../interfaces/product"
import productListService from "../../services/products/productList.services"


const productListController = async (req:Request, res:Response)=>{

    const productList:IProduct[] =await  productListService() 


    return res.json(productList)
}
export default productListController