import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt"

const userUpdatePasswordService = async(email:string, password:any)=> {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const account = users.find(user=>user.email===email)

    if(bcrypt.compareSync(password, account!.password)){
        throw new Error("Please, informa a diferente password.")
    }
    const newPassword = bcrypt.hashSync(password,10)
    await userRepository.update(account!.id, {password: newPassword})

    return true
}

export default userUpdatePasswordService