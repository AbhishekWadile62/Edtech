const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const VideosSchema = new Schema({
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

const VideosModel = mongoose.model('videos',VideosSchema)  
module.exports=VideosModel