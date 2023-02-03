import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"


const userDeleteSelfService = async (email:string) =>{
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    const userToDeletion = users.find(user=>user.email===email)

    userRepository.delete(userToDeletion!.id)
    
    return userToDeletion
}

export default userDeleteSelfService