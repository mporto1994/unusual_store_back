import { Router } from "express";
import cartAddProdController from "../controllers/cart/cartAddProd.controller";
import cartDelProdController from "../controllers/cart/cartDelProd.controller";
import productCreateController from "../controllers/products/productCreate.controller";
import productListController from "../controllers/products/productList.controller";
import authUserMiddleware from "../middlewares/authUser.middleware";



const routes = Router()

export const cartRoutes = () => {
    routes.post("/",authUserMiddleware, cartAddProdController)
    routes.delete("/:product_id", authUserMiddleware, cartDelProdController)


    return routes
}