import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import connectToMongo from "./config/mongo.js";
import jobRouter from "./routes/job-router.js";

const app = express();
dotenv.config();
connectToMongo();

app.use(bodyParser.json());

app.use("/api", jobRouter);

app.listen(3001);
