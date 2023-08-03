const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/database");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const rootRouter = require("./routes");
app.use("/", rootRouter);

const initApp = async () => {
  console.log("Testing the database connection...");
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
    db.sync();
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database", error.message);
  }
};

initApp();
