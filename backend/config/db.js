import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      //
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB connected : ${conn.connection.host}`); //it will give you the name of host
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1); //if the server is not responding then pass an error message that's why we pass 1 here.
  }
};

export default connectDB;
