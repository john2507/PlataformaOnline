const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  return response.json({ messege: "pagina 1 do teste api" });
});

module.exports = router;
