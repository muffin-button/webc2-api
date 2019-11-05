const app = require("express")();
const options = {};
const server = require('http').createServer(options, app);
import bodyParser from 'body-parser';
var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// server settings
const serverPort = process.env.PORT || 5080;
const registerPort = () => {
    console.log(`webc2-api registering port ${serverPort}`);
    server.listen(serverPort, () => {
        console.log(`   \`- webc2-api listening at ${server.address().port}`);
    });
}

app.get('/test', (req,res) => {
    console.log(`/test`);
    const message = "<h1>Success</h1>";
    res.status(200).send(message);
});

app.post('/echo', (req,res) => {
    console.log(req.body);
    res.status(200).send(`Your results are: 
    ${req.body.command}`);
})

registerPort();