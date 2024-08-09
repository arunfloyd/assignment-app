const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload"); 
const path = require("path");
const Connection = require('./src/config/db.js')
const uploadRouter = require('./src/routes/upload.route.js');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static("public"));
// app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true
  })
);
const allowedOrigins = process.env.NODE_ENV === "production"
  ? process.env.ALLOWED_ORIGINS_PRODUCTION.split(',')
  : process.env.ALLOWED_ORIGINS_LOCAL.split(',');

const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
Connection();
app.use('/api',uploadRouter)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "server/build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname,"index.html"));
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("Server is Running! 🚀");
//   });
// }
app.get("/", (req, res) => {
  res.send("Server is Running! 🚀");
});
app.listen(PORT, () => {
  console.log(`Server running on PORT http://localhost:${PORT}`);
});