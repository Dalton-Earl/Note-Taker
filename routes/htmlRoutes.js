var path = require("path");

module.exports = function(app, fs){

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

}