const express = require("express");
const notesRoutes = require("./routes/noteRoutes.js");
const { connectDB } = require("./config/db.js");
const donenv = require("dotenv");

donenv.config();
console.log();

connectDB();
const PORT = process.env.PORT || 5001;
const app = express();

//middleware
app.use(express.json());

app.use("/api/notes", notesRoutes);
/* what is an endpoint?
An endpoint is a combination of a URI + method that lets the client
interact with a specific resoure */

app.listen(PORT, () => {
  console.log("server started on PORT :", PORT);
});
