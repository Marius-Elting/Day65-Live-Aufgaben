import fs from 'fs';

// // Callback function

// const callback = () => {
//     console.log("Ich bin ein Callback");
// };

// const einfacheFunction = (callback) => {



//     callback();
// };

// einfacheFunction(callback);


// fs.writeFile("./hello.txt", "hdhdhdhdh", (err) => {
//     if (err) console.log(err);
//     fileWriter("zoohandlung");
// });


// const fileWriter = (data) => {
//     fs.writeFile("./hello.txt", data, (err) => {

//     });
// };

// // promise chaining
// // .then() hat als Rückgabewert immer ein Promise, dadurch können wir diese .then() Methoden aneinander ketten.
// fs.promises.writeFile("./salon", "Waschbecken")
//     .then(() => fs.promises.readFile("./hello.txt"))
//     .then(data => console.log(data.toString()))
//     .catch(err => console.log(err));


// console.log(new Promise((res, rej) => res("dada")).then(dad => console.log(dad)));




// Server krams
import http from 'http';

const requestHandler = (req, res) => {
    if (req.url === "/") {
        res.end("Du hast kein Geld");
    } else if (req.url = "/naml") {
        res.end("Hey Oma schau mal mein Server <3");
    } else {
        res.writeHead(404);
        res.end("Site not found 404");
    }
    console.log("da kommt ein neuer Request, " + req.method + req.url);
};

const server = http.createServer(requestHandler);

server.listen(9898, () => console.log("Der Server läuft auf Port 9898"));