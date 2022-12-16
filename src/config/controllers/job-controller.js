import Job from "../../models/Job.js";

export const getAllJobs = async (req, res) => {
  const data = await Job.find();
  return res.json(data);
};
