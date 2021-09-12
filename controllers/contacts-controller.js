const express = require("express");
const jsonParser = express.json();
const router = express.Router();
const fs = require("fs");
const filePath = "contacts.json";

router.get("/", (req, res) => {
  const content = fs.readFileSync(filePath, "utf8");
  const contacts = JSON.parse(content);
  res.send(contacts);
});

router.get("/:id", (req, res) => {});

router.post("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let data = fs.readFileSync(filePath, "utf8");
  let contacts = JSON.parse(data);
  let contactIndex = contacts.map((c) => c.id).indexOf(id);
  console.log({ id: id, map: contacts.map((c) => c.id) });

  if (contactIndex == -1) {
    res.status(404).send();
  } else {
    const removedContact = contacts.splice(contactIndex, 1)[0];

    data = JSON.stringify(contacts);
    fs.writeFileSync(filePath, data);

    res.send(removedContact);
  }
});

module.exports = router;
