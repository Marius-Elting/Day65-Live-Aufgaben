import fs from "fs";
import http from "http";

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
        sendFile("./assets/index.html", res);
    }
    else {
        const filePath = `./assets/${req.url}.html`;
        sendFile(filePath, res);
    }
});

server.listen(9898, () => console.log("Server läuft auf Port 9898"));