const mongoose = require("mongoose")
const todoSchema = mongoose.Schema({
    task:{
        
        type: String
    },
    date:{
        type: Date
    }
})

const todo = mongoose.model("todos", todoSchema)

module.exports = todo 