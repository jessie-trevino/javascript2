const http = require("http");

functiononRequest(req, res) {
    res.writeHead(200, {"content-Type": "text/plain"});
    res,write("Server has started. Hello World!");
    res.end();
}
http.createServer(onRequest).listen(8000);
