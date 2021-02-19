const express = require('express');
const APIroutes = require("./routes");
const cors = require('cors');
const app = express();
var multer = require('multer');
var upload = multer();


app.set("view engine", "ejs");
app.set("pages", "pages")
//production//var PORT = process.env.PORT || '5000'
//developement
app.use(express.json());
app.use(cors());
app.use("/", APIroutes)

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.use(upload.array());
app.use(express.static('public'));




app.listen(process.env.PORT || '3000', () =>{
    console.log(`server is running at http://localhost:${process.env.PORT || 3000}`);    
})