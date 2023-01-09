const mongoose = require('mongoose')

const listSchema = mongoose.Schema({
    eNo:Number,
    event:String
})

let Event = mongoose.model('events', listSchema, 'events')

module.exports = Event