import mongoose from "mongoose";

const { Schema } = mongoose;

const jobSchema = new Schema({
  company: {
    type: Schema.Types.String,
    required: true,
  },
  logo: {
    type: Schema.Types.String,
    required: true,
  },
  new: {
    type: Schema.Types.Boolean,
    required: true,
  },
  featured: {
    type: Schema.Types.Boolean,
    required: true,
  },
  position: {
    type: Schema.Types.String,
    required: true,
  },
  role: {
    type: Schema.Types.String,
    required: true,
  },
  level: {
    type: Schema.Types.String,
    required: true,
  },
  postedAt: {
    type: Schema.Types.String,
    required: true,
  },
  contract: {
    type: Schema.Types.String,
    required: true,
  },
  location: {
    type: Schema.Types.String,
    required: true,
  },
  languages: {
    type: [Schema.Types.String],
    required: true,
  },
  tools: {
    type: [Schema.Types.String],
    required: true,
  },
});

const Job = mongoose.model("Job", jobSchema);

export default Job;