import { DataSource } from "typeorm";
import dotenv from "dotenv";
import path from "path";

console.log("✅ Environment variables loaded:");
console.log("DB_TYPE:", process.env.DB_TYPE);
console.log("DATABASE_URL:", process.env.DATABASE_URL);

dotenv.config({ path: path.resolve(__dirname, ".env") });
export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as any,
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: true,
});


