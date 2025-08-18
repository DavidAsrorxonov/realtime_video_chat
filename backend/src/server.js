import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get("/api/auth/signup", (req, res) => {
  res.send("Hello from signup");
});

app.get("/api/auth/login", (req, res) => {
  res.send("Hello from login");
});

app.get("/api/auth/logout", (req, res) => {
  res.send("Hello from logout");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
