const express = require('express');
const { connectDatabase } = require('./configs');

const app = express();

app.use(express.json());

connectDatabase();

app.listen(8080, () => {
    console.log("Server connected");
})