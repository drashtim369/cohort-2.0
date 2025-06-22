const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json()); // Use express.json instead of body-parser

// Routes
app.get('/', (req, res) => {
    const counter = req.query.counter;
    const x = calcSum(counter);
    res.send("The sum is " + x);
});

app.get('/helloWorld', (req, res) => {
    res.send("Hello World!");
});

app.post('/createUser', (req, res) => {
    res.send("Hello World!");
});

app.delete('/deleteUser', (req, res) => {
    res.send("Delete hello world.");
});

app.put('/updateUser', (req, res) => {
    res.send("Hello humans");
});

app.post('/2', (req,res) => {
    console.log("Recieved body: ", req.body);
    res.send('Hello bitches.');
})
app.post('/bodyParse', (req, res) => {
    console.log("Received body:", req.body);
    console.log("Recieved headers: ",req.headers);
    res.send({
      "msg": "What is 2 + 2"
    });
});

function calcSum(counter) {
    let sum = 0;
    for (let i = 0; i <= counter; i++) {
        sum += i;
    }
    return sum;
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
