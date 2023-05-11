const express = require('express');

require('dotenv').config();

const server = express();

const port = process.env.PORT || 9000;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})