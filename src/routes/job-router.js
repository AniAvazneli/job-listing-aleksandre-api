import express from "express";
import { getAllJobs } from "../controllers/job-controller.js";

const jobRouter = express.Router();

jobRouter.get("/jobs", getAllJobs);

export default jobRouter;
