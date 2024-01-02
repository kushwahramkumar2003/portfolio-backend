const axios = require("axios");
const config = require("../config");

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await axios.get(
      `${config.BLOGS_API_DOMAIN}/api/v1/posts?searchKeyword`
    );

    blogs.data = blogs.data.slice(0, 6);

    res.status(200).json(blogs.data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error,
    });
  }
};
