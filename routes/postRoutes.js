const express = require("express");
const { postBody } = require("../controllers/postController");
const router = express.Router();

router.post("/", postBody);

module.exports = router;