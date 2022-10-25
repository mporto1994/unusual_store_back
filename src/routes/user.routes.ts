import { Router } from "express";
import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";
import userLoginController from "../controllers/users/userLogin.controller";
import userDashboardController from "../controllers/users/userDashboard.controller";
import authUserMiddleware from "../middlewares/authUser.middleware";
import userDeleteSelfController from "../controllers/users/userDeleteSelf.controller";
import userUpdatePasswordController from "../controllers/users/userUpdatePassword.controller";


const routes = Router();

export const userRoutes = () => {
    routes.post("/", userCreateController)
    routes.post("/login", userLoginController)
    
    routes.get("/me", authUserMiddleware, userDashboardController)
    routes.get("/",authUserMiddleware, userListController)
    
    routes.delete("/me", authUserMiddleware, userDeleteSelfController)
    routes.patch("/me/updatePassword", authUserMiddleware, userUpdatePasswordController)

    return routes
}


