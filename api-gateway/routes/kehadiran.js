const express = require("express");
const router = express.Router();
const apiAdapter = require("./apiAdapter");
const { URL_SERVICE_KEHADIRAN } = process.env;
const api = apiAdapter(URL_SERVICE_KEHADIRAN);

router.post("/", async (req, res) => {
  try {
    const response = await api.post("/kehadiran", req.body);
    return res.json(response.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED")
      return res
        .status(500)
        .json({ status: "error", message: "Service unavailable" });
    const { status, data } = error.response;
    return res.status(status).json(data);
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await api.get("/kehadiran");
    return res.json(response.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED")
      return res
        .status(500)
        .json({ status: "error", message: "Service unavailable" });
    const { status, data } = error.response;
    return res.status(status).json(data);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const response = await api.put(`/kehadiran/${req.params.id}`, req.body);
    return res.json(response.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED")
      return res
        .status(500)
        .json({ status: "error", message: "Service unavailable" });
    const { status, data } = error.response;
    return res.status(status).json(data);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const response = await api.delete(`/kehadiran/${req.params.id}`);
    return res.json(response.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED")
      return res
        .status(500)
        .json({ status: "error", message: "Service unavailable" });
    const { status, data } = error.response;
    return res.status(status).json(data);
  }
});
module.exports = router;
