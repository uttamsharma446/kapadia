import mongoose from "mongoose";

var isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Mongodb is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "kapadia_prompt",
      
    });
    isConnected=true
  } catch (e) {
    console.log(e)
    //
  }
};
