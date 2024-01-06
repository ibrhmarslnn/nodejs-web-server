//npm install express@4.13.2 -save //express js kendi web serverımızı web sunucumuzu kurmaya yarar.http requestleri algılar.
var express = require("express");
var app = express();

//localhost:3000
app.get("/", function(req, res){// "/"--> hangi istek gelirse gelsin kabul et.
    res.send("Merhaba Express!!!!");
})

//localhost:3000/hakkimda
app.get("/hakkimda", function(req, res){//node server.js ile önce çalıştır. sonra browserdan localhost:3000/hakkimda yaz.
    res.send("Hakkımda sayfası!!!");
})

app.listen(3000);//3000 nolu port.