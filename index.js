const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users.route");
const dbConnect = require("./utils/dbConnect");
const adminRouter = require("./routes/admins.router");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/admins", adminRouter);
dbConnect();

app.get("/", (req, res) => {
    res.send("Server is running..");
})

app.listen(port, () => {
    console.log("Server is running on  port:  ",port);
})