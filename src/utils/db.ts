import mongoose from "mongoose";

const connect = async () => {
  const mongoURI = process.env.MONGO;

  if (!mongoURI) {
    throw new Error("MongoDB connection URI is not defined.");
  }

  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB!");
  } catch (error) {
    throw new Error("Connection to MongoDB failed!");
  }
};

export default connect;
