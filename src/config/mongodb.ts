import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const mongodbUrl = process.env.MONGODB_URL_STRING as string

export default (async() => {
  try {
    await mongoose.connect(mongodbUrl)
    console.log("MongoDB connected!")
  } catch (error) {
    console.error("ERROR: ", error)
    process.exit(1)
  }
})()