const express = require("express");
const rootRouter = express.Router();

const dreamsRouter = require("./dreams");
const emotionsRouter = require("./emotions");

rootRouter.use("/dreams", dreamsRouter);
rootRouter.use("/emotions", emotionsRouter);

module.exports = rootRouter;
