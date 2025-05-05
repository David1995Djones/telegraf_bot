import dotenv from 'dotenv'
dotenv.config()

console.log(process.env.BOT_TOKEN)
console.log(process.env.MONGO_TOKEN)

export const config = {
    BOT_TOKEN: process.env.BOT_TOKEN as string,
    PORT: process.env.PORT || 3000,
    MANAGER_NAME: process.env.MANAGER_NAME,
    MONGO_TOKEN: process.env.MONGO_TOKEN || "mongodb://localhost:27017",
    DB_NAME: process.env.DB_NAME || '111111111'
}