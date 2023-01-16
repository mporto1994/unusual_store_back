import { DataSource} from "typeorm"

require("dotenv").config();

export const AppDataSource = new DataSource({
    type:"postgres",
    
    url: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV==="production" ? 
    {rejectUnauthorized:false} : false ,
    synchronize:false,
    logging: true,
    
    entities: process.env.NODE_ENV=== "production" ?
    ["dist/entities/*.js"] : ["src/entities/*.ts"]
    ,
    migrations: process.env.NODE_ENV=== "production" ?
    ["dist/migrations/*.js"] : ["src/migrations/*.ts"]
    
    
    /*
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PWD,
    database: process.env.POSTGRES_DB,
    synchronize: false,
    logging: true,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
    
*/

});

    AppDataSource.initialize()
        .then(()=>{
            console.log("DataSource Initialized")
        })
        .catch((err)=>{
            console.error("Error during DataSource Initialization", err)
        })
