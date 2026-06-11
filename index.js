const http = require("http");

console.log("this is simple http example");

const server = http.createServer((req, res) => {


    if (req.method === 'GET' && req.url === '/test') {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end("hello world 1 2 3 4 5 this is from server");
    }


    else if (req.method === "GET" && req.url === '/test-json') {
        const respObject = {
            nama: "gede",
            umur: 23,
            kelamin: "laki-laki"
        }
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(respObject));
    }

    else if (req.method === "POST" && req.url === "/submit") {


        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

    

        req.on("end", () => {

            let content = JSON.parse(body);

            res.writeHead(200,{ "content-type": "application/json" });
            res.end(JSON.stringify({
                message: "success",
                data: content
            }));
        });


    }

}

);

server.listen(5555, () => { console.log("server listening") });



