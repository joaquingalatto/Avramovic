const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };
http.createServer((req, res) => {
  let file = req.url === '/' ? '/index.html' : req.url;
  let fp = path.join(__dirname, file);
  fs.readFile(fp, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': mime[path.extname(fp)] || 'text/html' });
    res.end(data);
  });
}).listen(3001, () => console.log('Serving on http://localhost:3001'));
