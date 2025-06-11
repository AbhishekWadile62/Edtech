const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Practicals = new Schema({
    title:{
        type:String,
        required:true,
    },
    practicals:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const PracticalModel = mongoose.model('practicals',Practicals)
module.exports=PracticalModel