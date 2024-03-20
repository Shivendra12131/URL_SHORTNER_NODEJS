const express = require("express");

const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleupdate
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);

router.get("/:shortId",handleupdate);

router.get("/analytics/:shortId", handleGetAnalytics);



module.exports = router;
