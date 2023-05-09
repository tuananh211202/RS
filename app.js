const express = require("express");
const app = express();
const blogRouter = require("./routes/BlogRoutes");
const cors = require("cors");
const bodyparser = require("body-parser");

//mongodb
const mongoose = require("mongoose");
//configure mongoose
mongoose
  .connect(
    "mongodb+srv://xanhduong309:Anh21122002@cluster0.oonpnat.mongodb.net/?retryWrites=true&w=majority" ||
    "mongodb+srv://it4409:it4409-soict@lamdb-crud.qd3s7vv.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"));

//middleware
app.use(express.json());
app.use(cors());

app.use(bodyparser.urlencoded({ extended: true }));

app.use("/", blogRouter);

app.set("view engine", "ejs");

app.use(
  cors({
    origin: "*",
  })
);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;
