const express = require('express');
const router = express.Router();
const AssignmentModel=require('../Models/assignments.js');
const PracticalsModel=require('../Models/practicals.js');
//https://edtech-1-soei.onrender.com/dash/assignments

router.post('/assignments',async(req,res)=>{
    try{
        if(!req.body.title || !req.body.queations){
            return res.status(400).json({ error: "Title and Link are required" })
        }

        const newAssignments = new AssignmentModel({title:req.body.title,queations:req.body.queations})

        const ass = await newAssignments.save();
        res.send(ass);

    }catch(error){
        res.status(500).send('Server Error');
    }
})
//https://edtech-1-soei.onrender.com/dash/showyeshchigand
router.get('/showyeshchigand',async(req,res)=>{
    try {
        const ass = await AssignmentModel.find();
        res.send(ass);
    } catch (error) {
        console.log(error);     
        res.status(500).send('Server Error');
    }
});

//https://edtech-1-soei.onrender.com/dash/oneAssignment/:_id
router.get("/oneAssignment/:_id",async(req,res)=>{
    const id = req.params._id.replace(":", "");
    // console.log(req.params);
    
    // console.log("id:",id)
    try{
        const assignments = await AssignmentModel.findOne({_id:id})
        res.json(assignments)
        // console.log(assignments)
    }catch(error){
        console.log(error)
        res.status(500).json({'error':error})
    }
})

//https://edtech-1-soei.onrender.com/dash/practicals

router.post('/practicals',async(req,res)=>{
    try{
        if(!req.body.title || !req.body.practicals){
            return res.status(400).json({ error: "Title and Link are required" })
        }

        const newPractical = new PracticalsModel({title:req.body.title,practicals:req.body.practicals})

        const ass = await newPractical.save();
        res.send(ass);

    }catch(error){
        res.status(500).send('Server Error');
    }
})
//https://edtech-1-soei.onrender.com/dash/showpracticals
router.get('/showpracticals',async(req,res)=>{
    try {
        const ass = await PracticalsModel.find();
        res.send(ass);
    } catch (error) {
        console.log(error);     
        res.status(500).send('Server Error');
    }
});

//https://edtech-1-soei.onrender.com/dash/onePracticalSubject/:_id
router.get("/onePracticalSubject/:_id",async(req,res)=>{
    const id = req.params._id.replace(":", "");
    // console.log("id/:",id)
    try{
        const practicals = await PracticalsModel.findOne({_id:id})
        res.json(practicals)
        // console.log(practicals)
    }catch(error){
        console.log(error)
        res.status(500).json({'error':error})
    }
})

module.exports=router;