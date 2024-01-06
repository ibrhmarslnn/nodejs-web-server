var express = require("express");
var app = express();
var PORT = 3000;

//localhost:3000
/*
app.get("/", function(req, res){
    res.send("Merhaba Express!!!!");
})
*/

app.get("/hakkimda", function(req, res){
    res.send("Hakkımda sayfası!!!");
})

app.use(express.static(__dirname + '/public'));//sayfa çağırdık. app.get("/")--> bu yoksa localhost:3000 yazınca index.html çalışır. varsa merhaba express yazar.

app.listen(PORT, function(){
    console.log("Express server " + PORT + " nolu portta çalışıyor...");
});