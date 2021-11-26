import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Routes from "./api/routes";

async function start() {
  require("dotenv").config();
  const morgan = require("morgan");

  const PORT = process.env.PORT || 8000;
  const app = express();

  app.use(cors());

  mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log("Tagme database connected"))
    .catch((error) => console.log("Tagme database connection failed:", error));

  app.use(morgan("dev"));
  app.use(express.json());
  app.use("/api/images", express.static("images"));

  Routes(app);

  app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
  });
}

start();
