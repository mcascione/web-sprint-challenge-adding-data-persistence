const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {   //eslint-disable-line
    res.status(200).json({ message: "hello from tasks router" });
  });

router.use((err, req, res, next) => {
    next({
        message: err.message,
        customMessage: "something went wrong in the tasks router"
    })
})

module.exports = router;
