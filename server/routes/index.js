const express =  require("express");
const db = require("../db");
var multer = require('multer');

const router = express.Router();



router.get('/', async(req, res, next) =>{
    try{
        let results = await db.all();
        res.render("index.ejs",{results : results});
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/login', async(req, res, next) =>{
    try{

        res.render("login.ejs");
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

router.post('/create', async(req, res, next) =>{
    try{
        // let results = await db.create(req.body.name, req.body.email, req.body.age);
        console.log(req.body)
        res.json(['oui'])
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

module.exports = router;