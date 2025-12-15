const express = require("express");
const cors = require("cors");
const downloadRouter = require("./routes/download");

const app = express();
const PORT = process.env.API_PORT || 3001;

app.use(cors());

app.use("/download", downloadRouter);

app.listen(PORT, "localhost", () => {
  console.log(`Server is live at port ${PORT}`);
});
