const express = require("express");
const router = express.Router();
const kehadiranHandler = require("./handler/kehadiran");

router.post("/", kehadiranHandler.create);
router.get("/", kehadiranHandler.getAll);
router.put("/:id", kehadiranHandler.update);
router.delete("/:id", kehadiranHandler.destroy);

module.exports = router;
