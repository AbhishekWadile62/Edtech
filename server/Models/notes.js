const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NotesSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    link:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const NotesModel = mongoose.model('notes',NotesSchema)  
module.exports=NotesModel