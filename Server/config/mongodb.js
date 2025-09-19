import mongoose from "mongoose";

const connectDB = async () => {

  if (mongoose.connection.readyState >= 1) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/ecomm`);
    console.log("MongoDB CONNECTED! ");
  }
  catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
})

mongoose.connection.on("error", (err) => {
  console.error(err.message);
})

export default connectDB;