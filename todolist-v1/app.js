const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+"/date.js")
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));

const items=["Keep good mood!"];
const workItems = [];

app.get('/', function(req, res){
    let today = new Date();
    // var currentDay = today.getDay();
    // var day="";
    // let options = {
    //     weekday: "long",
    //     day: "numeric",
    //     month: "long"
    // };
    // switch(currentDay){
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thurdday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6: 
    //         day = "Saturday";
    //         break;
    //     default:
    //         console.log("Error: current day is equal to: " + currentDay);
    // }
    // let day = today.toLocaleDateString("en-US", options);
    let day = date.getDate();
    res.render("list", {
        listTitle: day,
        newListItems: items,
    })
})

app.post("/", function(req, res){
    const item = req.body.newItem;
    if (req.body.list === "work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
})

app.get("/work", function(req, res){
    res.render("list", {
        listTitle: "Work List", 
        newListItems: workItems
    })
})

app.get("/about", function(req, res){
    res.render("about");
})

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.listen(3030, function(){
    console.log("server started on port 3030");
})