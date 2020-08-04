const express = require("express")
// const mongoose = require("mongoose")
var app = express()
var PORT = process.env.PORT || 8010
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./routes/apiRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});