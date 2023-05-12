const express = require("express");
const router = express.Router();

//eslint-disable-next-line
router.get("/", (req, res, next) => {
  res.status(200).json({ message: "hello from tasks router" });
});

//eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    customMessage: "something went wrong in the task router",
  });
});

module.exports = router;
