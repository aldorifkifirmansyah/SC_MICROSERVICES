const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_MEDIA } = process.env;

const api = apiAdapter(URL_SERVICE_MEDIA);

module.exports = async (req, res) => {
  try {
    const id = req.params.id;
    const media = await api.delete(`/media/${id}`);
    return res.json(media.data);
  } catch (error) {
    console.log(error.message, URL_SERVICE_MEDIA);
    if (error.code === "ECONNREFUSED") {
      return res.status(500).json({
        status: "error",
        message: "service media unavailable",
      });
    }
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }
    return res.status(500).json({
      status: "error",
      message: "internal server error",
    });
  }
};
