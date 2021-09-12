const express = require("express");
const cors = require("cors");
const PORT = process.env.port || 2000;
const app = express();
const contactsController = require("./controllers/contacts-controller");

app.use(express.static(__dirname + "/public"));

app.use(cors());

app.use("/api/contacts", contactsController);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
