var express = require("express");
var fs = require("fs");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/static', express.static("public"));

// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);



app.listen(PORT, function(){
    console.log(`App listening on PORT: ${PORT}`);
    
})