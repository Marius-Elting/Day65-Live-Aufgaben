import fs from "fs";
import http from "http";
import path from "path";

// Plan 
// Get /  --> index.html
// Get /<dateiname>.html --> dateiname.html
// ansonsten ERROR


const sendFile = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.end("ERROR");
            return;
        } else {
            res.end(data.toString());
        }
    });
};

const server = http.createServer((req, res) => {
    console.log("Da kommt ein neuer Request", req.method, req.url);
    if (req.url === "/") {
        sendFile("./assets/home.html", res);
    }
    else {
        const filePath = `./assets/${req.url}`;
        sendFile(filePath, res);
    }
    let filename = "./assets" + req.url;
    if (filename.includes("img")) {
        var fileStream = fs.createReadStream(filename);
        res.writeHead(200, { "Content-Type": "image/png" });
        fileStream.pipe(res);
    }

});

server.listen(4545, () => console.log("Server läuft auf Port 4545"));