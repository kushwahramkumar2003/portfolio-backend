const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes/index.routes.js");
// const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://portfolio-ramkumar.netlify.app",
];

// app.use(methodOverride('_method'));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: function (origin, callback) {
      const isAllowed = allowedOrigins.includes(origin) || !origin;
      callback(null, isAllowed);
    },
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/v1", routes);
app.get("/", (_req, res) => {
  res.send("Hello there Ramkumar's - API");
});

app.all("*", (_req, res) => {
  return res.status(400).json({
    success: false,
    message: "Route not found",
  });
});

module.exports = app;
