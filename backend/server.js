import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json()); //body parsing.//Now this object that we add to the body tab in Postman, what will be sent in an object (key-value) on the request object. We extract that from request.body.
//But in order for parsing this JSON data that we get on the request object from the frontend/Postman, we need to add another middleware in server.js.

app.use("/api/products", productRoutes); //we use app.use because we split our file get is now on router object
//in this we are saying that if we go on this route then send it to the productRoutes is middleware
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

//create static folder directory name
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running!");
  });
}

//Error middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000; //we pass or 5000 if the process.env not work then it pass bydefault 5000

app.listen(
  PORT,
  console.log(
    `Server runnning in ${process.env.NODE_ENV} mode on port ${PORT} `
  )
);
