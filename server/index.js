import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
dotenv.config();

const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);


app.listen( PORT, ()=>{
    console.log(`Server is listening on PORT ${PORT}`);
    connectDB();
});