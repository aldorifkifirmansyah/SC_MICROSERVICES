const { Kehadiran } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    student_nim: "string|empty:false",
    student_name: "string|empty:false",
    class_name: "string|empty:false",
  };
  const validate = v.validate(req.body, schema);
  if (validate.length)
    return res.status(400).json({ status: "error", message: validate });

  const data = await Kehadiran.create(req.body);
  return res.json({ status: "success", data });
};
