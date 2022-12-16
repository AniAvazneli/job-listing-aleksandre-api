import Job from "../models/Job.js";

export const getAllJobs = async (req, res) => {
  const data = await Job.find();
  const newData = data.map((job) => {
    return {
      id: job.id,
      company: job.company,
      logo: job.logo,
      new: job.new,
      featured: job.featured,
      position: job.position,
      role: job.role,
      level: job.level,
      postedAt: job.postedAt,
      contact: job.contract,
      location: job.location,
      languages: job.languages,
      tools: job.tools,
    };
  });
  return res.json(newData);
};
