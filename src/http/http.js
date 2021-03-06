const http = require('http');
const conf = {
    hostname: '127.0.0.1',
    port: '9527',
};
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.end("{data: [{name: 'xuanyuan', age: 20}], msg: 'web'}");
});

server.listen(conf.port, conf.hostname, () => {
    const addr = `http://${conf.hostname}:${conf.port}`;
    console.log(`Server start at ${addr}`);
});