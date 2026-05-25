const express = require("express");
const router = express.Router();
const mentorsHandler = require("./handler/mentors");

router.post("/", mentorsHandler.create);
router.get("/", mentorsHandler.getAll);
router.delete("/:id", mentorsHandler.destroy);
router.put("/:id", mentorsHandler.update);
router.get("/:id", mentorsHandler.get);

module.exports = router;
