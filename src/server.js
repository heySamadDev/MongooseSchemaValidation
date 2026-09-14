const app = require("./app.js");
const connectDB = require("./db/index.js");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const connectServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
  });
};

connectServer();
