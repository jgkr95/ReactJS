const mongoose = require('mongoose');
var bodyParser = require('body-parser')
var express = require('express')
var app = express()
var cors= require('cors')
app.use(cors())
const Schema = mongoose.Schema;
app.use(bodyParser.json())


mongoose.connect('mongodb+srv://tarun:tarun@cluster0.tnjbs.mongodb.net/login?retryWrites=true&w=majority', {useNewUrlParser: true})
.then(() =>{
	console.log("connection established successfully")
});


let user = new Schema({
  fname: String,
  lname: String,
  email: String,
  mobile: String,
  password: String
});
let notes= new Schema({
    title: String,
    content: String,
    userId: String
});
 let UserObj = mongoose.model("user", user);
let noteObj = mongoose.model("notes",notes);

 app.post('/api/register',function(req,res){
    // var json = JSON.parse(req.body);
    //   console.log(json,"This is json object")
    //   

    new UserObj(req.body).save(function(err,res){
              if (err) {
                console.log("error"+err)  
              } else {
                console.log(res + "inserted into the mongodb")
                }
              })

    console.log(req.body)
    res.status(200).json({message:'Created successfully'})
    
});
app.post('/api/login',function(req,res){
    
    // console.log("Mongo", req.body, req.password)
    UserObj.findOne({email:req.body.email, password:req.body.password}, (err, docs)=>{
        if(err) res.send(false);
        else {
            console.log(docs);

            res.status(200).json({message:'Logged in successfully',data: docs})
        }
    })
})
app.post('/api/addNote',function(req,res){
    

    new noteObj(req.body).save(function(err,res){
              if (err) {
                console.log("error"+err)  
              } else {
                console.log(res + "inserted into the mongodb")
                }
              })

    console.log(req.body)
    res.status(200).json({message:'Added successfully'})
    
});

app.get('/api/getNotes/:id',function(req,res) {
    // body...
    console.log("params id",req.params.id)
    noteObj.find({ userId: req.params.id}).then(post => {
      if (post) {
        console.log("inside getnotes api ",post)
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Post not found!" });
      }
    });
  })


app.get('/api/getNotes',function(req,res) {
  // body...
  UserObj.find(function(err, data) {
       if(err){
           console.log(err);
           res.status(404)
       }
       else{
            console.log("getAllRecords",data);
            res.status(200).json({"data":data})
       }
   });
})




app.delete("/api/delete/:id", function(req, res) {
  noteObj.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});



app.listen(8080,function() {
	// body...
	console.log("Server started ar port 8080")
})