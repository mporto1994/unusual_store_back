import { AppDataSource } from "../../data-source"
import { Product } from "../../entities/product.entity"


const productListService = async() => {
    const productRepository = AppDataSource.getRepository(Product)

    const products = productRepository.find()
    
    return products
}

export default productListService