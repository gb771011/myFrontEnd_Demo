//  簡單伺服器
var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs");

var port = 8124;

var server = http.createServer(function (req, res) {
    var index = path.join(__dirname, "index.html");
    // console.log(index);
    var urlp = url.parse(req.url);
    console.log(urlp);
    fs.readFile(index, function (err, data) {
        /*
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        */
    });
    res.end();
});
server.listen(port);
console.log("Server running at port", port);