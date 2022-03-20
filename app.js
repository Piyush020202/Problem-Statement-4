const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://Piyush:Test123@cluster0.8i3p6.mongodb.net/userdb");
const userschema=mongoose.Schema({
    name:String,
    password:String,
    phoneno:Number,
    username:String
});

const User=mongoose.model("User",studentSchema);

app.route("/users")
.get(function(req,res){
    User.find({},function(err,files){
        if(!err){
            res.send(files);
        }
    });
})
.post(function(req,res){
    const user1=new File({
        name:req.body.name,
        username:req.body.username,
        phoneno:req.body.phoneno,
        password:req.body.password
    });
    user1.save(function(err){
        if(!err){
            res.send("SuccessFull Task");
        }
    });
})
.delete(function(req,res){
    User.deleteMany({},function(err){
        if(!err){
        console.log("Deleted SuccessFully");}
    })
});

app.route("/users/:username")
.get(function(req,res){
    
  User.findOne({username:req.params.username},function(err,foundFile){
    if(foundFile){
     res.send(foundFile);
    }
    else{
        res.send("No such file Exsist");
    }
  });
})
.put(function(req,res){
    User.updateOne(
        {username:req.params.username},
        {name:req.body.name,password:req.body.password,phoneno:req.body.phoneno,username:req.body.username},
        {overwrite:true},
        function(err)
        {
            if(!err){
                res.send("Good Job");
            }
        });
})
.patch(function(req,res){
    User.updateMany({username:req.params.username},
        {$set: req.body},
        function(err){
            if(!err){
                res.send("success");
            }
        });

})
.delete(function(req,res){
    User.deleteOne({username:req.params.username},function(err){
        if(!err){
            res.send("Deleted");
        }
    });
});

app.listen(process.env.PORT,function(){
    console.log("server started at port 3000");
});