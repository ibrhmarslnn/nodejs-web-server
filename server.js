var express = require("express");
var app = express();
var PORT = 3000;

var middleware = {
    requireAuthentication: function (req, res, next) {//next callback functiondır.next çağrılırsa expree anlayacak ki ileri gidebilirim.next olmazsa function yani sayfa çalışmayacak.
        console.log("Özel route girildi!!!");
        next();
    },
    logger: function (req, res, next) {//girilen metodun ismini ve url ini dönecek.
        console.log(req.method + " " + req.originalUrl);
        next();
    }
}

app.use(middleware.logger);//application seviyesi.

app.get("/hakkimda", middleware.requireAuthentication, function (req, res) {//route bazında middleware. sadece bu sayfada çalışır.
    res.send("Hakkımda sayfası!!!");
})

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log("Express server " + PORT + " nolu portta çalışıyor...");
});