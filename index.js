const http = require('http');
const app = require('./src/config/express.config');

const httpServer = http.createServer(app);

const PORT = 8000;
const URL = '127.0.0.1'

httpServer.listen(PORT, URL, (error) => {
    if (!error) {
        console.log(`http://${URL}:${PORT}`)
    }
})