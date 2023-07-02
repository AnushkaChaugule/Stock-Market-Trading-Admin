import { config } from "dotenv";

config();

export const {
    DATABASE,
    DB_SERVER,
    DB_USER,
    DB_PASSWORD,
    SERVER_PORT,
    SOCKET_PORT,
    ADMIN_USERNAME,
    ADMIN_PASSWORD,
    NODE_ENV,
    MONGO_URL_TEST,
    MONGO_URL_PROD,
    REDIS_HOST,
    SERVER_HOST

} = process.env