// var notesData = require("../db/db.json");
var notesData = require("../db/db")
// var notesData=[
//     {
//         title: "testing this note title",
//         text: "this is the text that will go in the body of the note that is rendered"
//     }
// ];




module.exports = function(app) {
    app.get("/api/notes", function(req, res){
        
        res.json(notesData);
        console.log(notesData);
    });
    

    app.post("/api/notes", function(req, res){
        var newNote = req.body
        
        notesData.push(newNote);
    })

    app.delete("/api/notes:id", function(req, res){
        let id = req.params.id;
        
        delete notesData[id];
    })
}