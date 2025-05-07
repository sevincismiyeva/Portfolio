import express from "express";
import "dotenv/config";
import "./src/db/dbConnection.js"
import studentRouter from "./src/routers/studentRouter.js";

const port = process.env.PORT || 3001
const app = express();

app.use(express.json());
app.use("/students", studentRouter);

app.get("/", (req, res) => {
    res.send("AF108")
})

app.listen(port, () => {
    console.log(`Server is run ${`http://localhost:${port}`}`)
})