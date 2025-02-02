const express = require('express');
const Resource = require('./model');
const router = express.Router();

router.get("/", (req, res, next) => {   
    Resource.FindResource()
        .then( resource => {
            res.status(200).json(resource)
        })
        .catch(next)
  });

router.post('/', async (req, res, next) => {
    try {
        const newResource = await Resource.CreateResource(req.body);
        res.status(201).json(newResource);
    } catch (err) {
        next(err)
    }
})

  //eslint-disable-next-line
router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      customMessage: "something went wrong in the resource router",
    })
  });

module.exports = router;
