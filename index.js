const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require("./routes")
require('dotenv').config();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/api/", routes);
const port = process.env.PORT_APP || 5000;
app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});