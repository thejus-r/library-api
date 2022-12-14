const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;

const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bookRouter = require("./routes/bookRoutes");
app.use("/api/book", bookRouter);
const userRouter = require("./routes/userRoutes");
app.use("/", userRouter);

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
