import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import connectDB from "./utils/database.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const PORT = process.env.PORT || 300;
const startServer = async () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(PORT, () =>
      console.log(`server running on port : http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
