import dotenv from 'dotenv';

type serverConfig = {
    PORT : number,
    MONGO_URI: string,
}

function loadEnv(){
    dotenv.config();
    console.log('Environment variables loaded');
}

loadEnv();


export const serverConfig: serverConfig ={
    PORT:Number(process.env.PORT) || 8080,
    MONGO_URI: process.env.MONGO_URI || "NA",
};