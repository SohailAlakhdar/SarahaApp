import mongoose from "mongoose";
import { asyncHandlar } from "../utils/response.js";

export const connectDB =  asyncHandlar( async () => {
        const result = await mongoose.connect(process.env.URI);
        console.log("Database Name:", mongoose.connection.name);
        console.log("DB Connected👌");
    });
