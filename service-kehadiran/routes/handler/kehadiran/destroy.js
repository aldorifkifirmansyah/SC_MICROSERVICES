const { Kehadiran } = require("../../../models");

module.exports = async (req, res) => {
  const id = req.params.id;
  const kehadiran = await Kehadiran.findByPk(id);
  if (!kehadiran)
    return res
      .status(404)
      .json({ status: "error", message: "Data tidak ditemukan" });

  await kehadiran.destroy();
  return res.json({ status: "success", message: "Data berhasil dihapus" });
};
