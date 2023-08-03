const express = require("express");
const router = express.Router();
const controller = require("../controllers/dreamController");

router.get("/", controller.getAll);
router.get("/:id", controller.getDream);
router.post("/", controller.addDream);
router.put("/:id", controller.updateDream);
router.delete("/:id", controller.deleteDream);

module.exports = router;
