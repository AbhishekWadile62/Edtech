const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const pyqsSchema = new Schema({
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

const pyqsModel = mongoose.model('pyqs',pyqsSchema)  
module.exports=pyqsModel