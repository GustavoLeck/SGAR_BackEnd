import express from "express";
import status from "./routes/statusRoute.js";
import cratePresenca from "./routes/Create-Presenca-Route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.clear();
app.listen(3000, () => {
  console.log("-- Server ON --");
  app.use("/api", status);
  app.use("/api", cratePresenca);
});
