import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));
const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 3000 !");
});
