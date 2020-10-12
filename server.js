// Require Dependencies
const express = require('express');
const fs = require("fs");
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


fs.readFile("./db/db.json","json",function(data) {
    var notes = data;
});


require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});   