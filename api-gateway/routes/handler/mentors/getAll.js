const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_MENTOR } = process.env;

const api = apiAdapter(URL_SERVICE_MENTOR);

module.exports = async (req, res) => {
  try {
    const mentors = await api.get("/api/mentors");
    return res.json(mentors.data);
  } catch (error) {
    console.log(error.message, URL_SERVICE_MENTOR);
    if (error.code === "ECONNREFUSED") {
      return res.status(500).json({
        status: "error",
        message: "service mentor unavailable",
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
