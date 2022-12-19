const express = require("express");
const env = require("./config/envConfig");
const connect = require("./config/db");
const userRoutes = require("./routes/users/userRoutes");
const categoryRoutes = require('./routes/users/categoryRoutes')
const cors = require("cors");

const app = express();

const port = env.PORT || 5000;

//database connected
connect();

app.use(cors());

//middleware,It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

//use routes
app.use("/api", userRoutes);
app.use('/api', categoryRoutes)


app.listen(port, () => {
  console.log(`this server is running on port ${port}`);
});
