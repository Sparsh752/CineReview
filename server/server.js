const express = require('express');
const mongoose=require('mongoose');
const app = express();
const Movie=require('./models/movies');
const URI="mongodb+srv://Sparsh:Sparsh89@cinereview.grry8bf.mongodb.net/Movie-list?retryWrites=true&w=majority"
mongoose.connect(URI,{ useNewUrlParser:true,useUnifiedTopology:true}).then((result)=>app.listen(3080,()=>{console.log("Server started on port 3080")})).catch((err)=>{
  console.log(err);
})
app.get("/api",(req,res)=>{
    Movie.find().then((result)=>{
      res.send(result);
    }).catch((err)=>{
      console.log(err);
    })
    // res.send([
    //     {
    //       "name":"KGF",
    //       "rating": 2,
    //       "id":1,
    //       "duration":"170",
    //       "genre":"action"
    //     },
    //     {
    //       "name":"Bramhastra",
    //       "rating": 2,
    //       "id":2,
    //       "genre":"action"
    //     },{
    //       "name":"Avengers",
    //       "rating":4.7,
    //       "id":3,
    //       "genre":"action",
    //     }
    //   ])
  app.post("/api",(req,res)=>{
    console.log(req.body);
  })
})
