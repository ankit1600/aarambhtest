import express from "express";
import cors from "cors";
import { connectdb } from "./config/db.js";

// app config
const app = express();
const port = process.env.PORT || 5000;

// middelware
app.use(express.json());
app.use(cors());

// db connection
connectdb();

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
