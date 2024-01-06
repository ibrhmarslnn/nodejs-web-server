var express = require("express");
var app = express();
var PORT = 3000;

var middleware = {//application bazında middleware. her sayfada çalışır.
    requireAuthentication: function (req, res, next) {//next callback functiondır.next çağrılırsa expree anlayacak ki ileri gidebilirim.next olmazsa function yani sayfa çalışmayacak.
        console.log("Özel route girildi!!!");
        next();
    },
    logger: function (req, res, next) {
        console.log(req.method + " " + req.originalUrl);
        next();
    }
}

app.use(middleware.requireAuthentication);

app.get("/hakkimda",  function (req, res) {
    res.send("Hakkımda sayfası!!!");
})



app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log("Express server " + PORT + " nolu portta çalışıyor...");
});