const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require('cors')
const Todo = require("./models/todo_models")

mongoose.connect('mongodb://127.0.0.1:27017/todo-crud')
.then(() => { console.log("DB connected") })

app.set('view engine', 'ejs')
app.use(cors())
app.get('/', async (req, res) => {
    // res.send(req.params)
    const todoFor = await Todo.find()
    res.json(todoFor)
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