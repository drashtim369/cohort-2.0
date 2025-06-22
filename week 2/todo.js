const express = require("express");
const port = 3000;
const app = express();

class Todo {
    constructor(todos) {
        this.todos = todos; // Array of tasks
    }

    task() {
        let result = "";
        for (let i = 0; i < this.todos.length; i++) {
            result += "Task " + (i + 1) + ": " + this.todos[i] + "<br>";
        }
        return result;
    }
}

let t1 = new Todo(["Walk the dog", "Do homework", "Buy groceries"]);
app.get('/2',(req,res) => {
    res.json({
        name: "Drashti",
        Age: 19
    })
})
app.get('/', (req, res) => {
    let x = t1.task();
    res.send(x);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
