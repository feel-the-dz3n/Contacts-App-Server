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

router.delete("/:id", (req, res) => {});

module.exports = router;
