import express  from "express";
import status from "./routes/statusRoute.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


console.clear();
app.listen(3000, () => {
    console.log("-- Server ON --")
    app.use('/api', status)
});