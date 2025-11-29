const dotenv = require("dotenv");
dotenv.config();

export const home_url = process.env.BACKEND_DIPLOYMENT_KEY || "http://localhost:8080";