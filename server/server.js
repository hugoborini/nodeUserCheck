const express = require('express');
const APIroutes = require("./routes");
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set("view engine", "ejs");
app.set("pages", "pages")


app.use(express.json());
app.use(cors());
app.use("/", APIroutes)



app.listen(process.env.PORT || '3000', () =>{
    console.log(`server is running at http://localhost:${process.env.PORT || 3000}`);    
})