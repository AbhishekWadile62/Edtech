const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
require("./Models/dbConnection");
const multer = require("multer");
const path = require("path");

// const PORT = process.env.PORT || 8080;
const authRouter = require("./Routes/authRouter");
const cors = require("cors");
const router = require("./Routes/router");
const extra = require("./Routes/extra");
const assignment = require("./Routes/assignment");
const http = require("http");
const { Server } = require("socket.io");

app.use(express.json());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // Adjust this if needed
    methods: ["GET", "POST"],
  },
});

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/assignments");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  try {
    // Send the PDF file to the client for download
    res.send({ message: "uploaded successfully..!" });
  } catch (err) {
    res.status(500).send("Error converting file.");
  }
});

app.get("/", (req, res) => {
  res.send("Hello from Auth Server!!!");
});
app.use("/auth", authRouter);
app.use(router);

app.use("/extra", extra);
app.use("/dash", assignment);

const PORT = process.env.PORT || 5000;

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("send_message", (data) => {
    io.emit("receive_message", data); // Broadcast message to all users
  });

  socket.on("disconnect", () => {
    console.log(`User Disconnected: ${socket.id}`);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
