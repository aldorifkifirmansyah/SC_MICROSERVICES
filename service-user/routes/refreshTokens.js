const express = require("express");
const router = express.Router();

const userHandler = require("./handler/refresh-tokens");

router.post("/", userHandler.create);
router.get("/", userHandler.getToken);

module.exports = router;
