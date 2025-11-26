import "dotenv/config";
import { PRODUCTION } from "@/utils/constants";

export default {
  env: process.env.ENV || PRODUCTION,
  baseUrl: process.env.BASE_URL || "http://localhost",
  port: process.env.PORT || 3000,
  secretKey: process.env.SECRET_KEY || "secretkey",
};
