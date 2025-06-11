const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Assignments = new Schema({
    title:{
        type:String,
        required:true,
    },
    queations:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const AssignmentModel = mongoose.model('assignments',Assignments)
module.exports=AssignmentModel