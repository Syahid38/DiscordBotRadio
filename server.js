const express = require('express');
const app = express();
app.use(express.static('public'));
//status
const https = require('https');
app.get("/", (request, response) => {
    response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
    https.get('');//repl 
}, 1);
//shell require
var shell = require('shelljs');
//shell status
shell.exec('nohup java -Dnogui=true -jar live.jar &')
