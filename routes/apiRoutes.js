const path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) {
        console.log("At home page")
        res.sendFile("/html/index.html", {
            root: path.join(__dirname, "../public")
        });
    })

    app.get("/about", function (req, res) {
        console.log("about page")
        res.sendFile("/html/about.html", {
            root: path.join(__dirname, "../public")
        });
    });


}
