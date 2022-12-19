import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import connectToMongo from "./config/mongo.js";
import jobRouter from "./routes/job-router.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";
import cors from "cors";

const app = express();
dotenv.config();
connectToMongo();

app.use(bodyParser.json());
app.use(cors())
app.use("/api", jobRouter);
app.use("/", ...swaggerMiddleware());

app.listen(process.env.PORT || 3001);
