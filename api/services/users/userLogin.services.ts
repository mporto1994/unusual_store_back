import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserLogin } from "../../interfaces/user"
import bcrypt from "bcrypt"
import  Jwt  from "jsonwebtoken"

const userLoginService = async({email,password}:IUserLogin)=>{

    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    const account  = users.find(user=>user.email===email)

    if (!account){
        return "User not found"
    }
    if(!bcrypt.compareSync(password,account.password)){
        return "Invalid login or password"
    }
    const token = Jwt.sign(
        {email:email},
        String(process.env.JWT_SECRET),
        {expiresIn:'1d'})

    return token
}
export default userLoginService