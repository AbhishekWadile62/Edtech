const express = require('express');
const router = express.Router();
const NotesModel= require("../Models/notes");
const VideosModel = require("../Models/video");
const pyqsModel = require("../Models/pyqs");

//http://localhost:8080/extra/test
router.post('/test',async(req,res)=>{
    console.log(req.body);
    // const {title,link} = req.body;
    try {
        if (!req.body.title || !req.body.link) {
            return res.status(400).json({ error: "Title and Link are required" });
        }

        const newNotes = new NotesModel({
            title:req.body.title,
            link:req.body.link
        })
        const notes = await newNotes.save();
        res.send(notes);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
})  

//http://localhost:8080/extra/shownotes
router.get('/shownotes',async(req,res)=>{
    try {
        const notes = await NotesModel.find();
        res.send(notes);
    } catch (error) {
        console.log(error);     
        res.status(500).send('Server Error');
    }
});

//http://localhost:8080/extra/videotest
router.post('/videotest',async(req,res)=>{
    console.log(req.body);
    // const {title,link} = req.body;
    try {
        if (!req.body.title || !req.body.link) {
            return res.status(400).json({ error: "Title and Link are required" });
        }

        const newVideos = new VideosModel({
            title:req.body.title,
            link:req.body.link
        })
        const videos = await newVideos.save();
        res.send(videos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
})

//http://localhost:8080/extra/showvideos
router.get('/showvideos',async(req,res)=>{
    try {
        const notes = await VideosModel.find();
        res.send(notes);
    } catch (error) {
        console.log(error);     
        res.status(500).send('Server Error');
    }
});

//http://localhost:8080/extra/pyqtest
router.post('/pyqtest',async(req,res)=>{
    console.log(req.body);
    // const {title,link} = req.body;
    try {
        if (!req.body.title || !req.body.link) {
            return res.status(400).json({ error: "Title and Link are required" });
        }

        const newPyqs = new pyqsModel({
            title:req.body.title,
            link:req.body.link
        })
        const pyqs = await newPyqs.save();
        res.send(pyqs);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
})

//http://localhost:8080/extra/showvideos
router.get('/showpyqs',async(req,res)=>{
    try {
        const pyqs = await pyqsModel.find();
        res.send(pyqs);
    } catch (error) {
        console.log(error);     
        res.status(500).send('Server Error');
    }
});
module.exports = router;
