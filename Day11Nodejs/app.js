
const express=require("express");
const app=express();
app.set("view engine","ejs");
const homepagecontent={
    header:{
        title:"GLA Header"},
    content:{
        title:"GLA Content"
    },

    footer:{
        title:"GLA footer"
    },
    data:{
        universityName:"GLA_University",
        student:[
            {name:"XYZ",dept:"CSE"},
            {name:"ABC",dept:"AI"},
        ]

    }
}
app.get('/gla',(req,res)=>{
    res.render("home",homepagecontent);
})
app.get("/header",(req,res)=>{
    res.render("header",homepagecontent.header);

})

app.get("/content",(req,res)=>{
    res.render("content",homepagecontent.content);
})

app.get("/footer",(req,res)=>{
    res.render("footer",homepagecontent.footer);
})

app.listen(3000,()=>{
    console.log("sever is running port:3000  ");
})