const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");

const taskRoutes = require("./routes");

const app = express();

dotenv.config();

app.use(express.json());

/* Routing */
app.use("/api/v1", taskRoutes);

/* Connection string */
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(colors.bgBlue(`Server listening on port ${PORT}`));
});
