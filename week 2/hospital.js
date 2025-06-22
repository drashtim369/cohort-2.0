const express = require("express");
const app = express();
const port = 3000;

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}];

app.get('/status', (req, res) => {
    let n = req.query.n;
    let countHealthy = 0;
    let totalCount = 0;
    let Kidneys = [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].name == n) {
            Kidneys = users[i].kidneys;
            totalCount = users[i].kidneys.length;

            for (let j = 0; j < users[i].kidneys.length; j++) {
                if (users[i].kidneys[j].healthy == true) {
                    countHealthy++;
                }
            }
        }
    }

    let countUnhealthy = totalCount - countHealthy;

    res.json({
        totalCount,
        countHealthy,
        countUnhealthy,
        Kidneys
    });
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
