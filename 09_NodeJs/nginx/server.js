const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
// create server is use to listen of upcoming request on browser.
const server = http.createServer((req, res) => {
    // join has the property to reference the current directory.
    // __dirname will give access to current directory.
    const filePath = path.join(__dirname, req.url === '/' ? "index.html" : req.url);
    console.log(filePath);

    // extname check the file extension .css, .html .js .cpp .py etc
    const extName = String(path.extname(filePath.toLowerCase()))
    const mimeType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'text/png'
    };

    const contentType = mimeType[extName] || 'application/octet-stream';
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === "ENOENT") {
                res.writeHead(404, { 'Content-Type': "text/html" });
                res.end('404: Bhai jo tu dhun ra hai vo edar nahi hai!! ....');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(port, () => {
    console.log(`Server is listing on port ${port}`)
});