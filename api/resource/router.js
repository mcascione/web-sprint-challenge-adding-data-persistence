const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {   //eslint-disable-line
    res.status(200).json({ message: "hello from resources router" });
  });

  //eslint-disable-next-line
router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      customMessage: "something went wrong in the resource router",
    })
  });

module.exports = router;
