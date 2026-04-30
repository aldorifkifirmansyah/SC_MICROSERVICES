const { Kehadiran } = require("../../../models");

module.exports = async (req, res) => {
  const data = await Kehadiran.findAll();
  return res.json({ status: "success", data });
};
