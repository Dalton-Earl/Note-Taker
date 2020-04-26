var notesData = require("../db/db.json");

console.log(notesData);
module.exports = function(app){
    app.get("/api/notes", function(req, res){
        res.json(notesData);
    });

    app.post("/api/notes", function(req, res){
        var newNote = req.body;

        console.log (`${newNote} was added`)
    })
}