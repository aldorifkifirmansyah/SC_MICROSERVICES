const { Kehadiran } = require("../../../models");

module.exports = async (req, res) => {
  const id = req.params.id;
  const kehadiran = await Kehadiran.findByPk(id);
  if (!kehadiran)
    return res
      .status(404)
      .json({ status: "error", message: "Data tidak ditemukan" });

  await kehadiran.update(req.body);
  return res.json({ status: "success", data: kehadiran });
};
