const express = require("express")
const app = express()
const Todo = require('./models/todo_models.js')
// const Todo = require("./models/todo_models")

// mongoose.connect('mongodb://127.0.0.1:27017/todo-crud')
// mongoose.connect('mongodb://mongo:sEuUeLFnrNRZEfjoiRMcIHOIKYgIaQia@mongodb.railway.internal:27017')
// .then(() => { console.log("DB connected") })

app.set('view engine', 'ejs')
Todo.connect().then(()=>console.log("Connected"))
app.use(express.json())
// Todo.query(`CREATE TABLE todos(task VARCHAR(100), dateof DATE)`)

app.get('/', async (req, res) => {
    // res.send(req.params)
    Todo.query(`INSERT INTO todos (task, dateof) VALUES ('XYZ', date '2026-02-13')`)
    const todo = await Todo.query(`select * from todos`)
    // await Todo.query(`DELETE FROM todos`)
    res.json(todo.rows)
})
app.post('/', (req, res) => {
    res.send("<h1>Hello!</h1>")
})
app.put('/', (req, res) => {
    res.send("<h1>Hello!</h1>")
})
app.delete('/', (req, res) => {
    res.send("<h1>Hello!</h1>")
})
app.listen(3000, () => {
    console.log("Successfully Connected")
})