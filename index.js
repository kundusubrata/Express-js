// ------------------Here you can show basic get api using express


// const express = require("express");
// const port = 3000;

// const app = express();

// app.get("/",(req,res)=>{
//     res.send("<h1>Hello World</h1>");
// })
// app.get("/about",(req,res)=>{
//     res.send("<h1>about page</h1>");
// })
// app.get("/contact",(req,res)=>{
//     res.send("<h1>contact page</h1>");
// })

// app.listen(port,()=>{
//     console.log(`Server is working on port: ${port}`);
// })



// ------------- Here you can see the location and some data on post api using form -------------------

// const express = require("express");
// const path = require("path");
// const bodyParser = require("body-parser");
// const port = 3000;
// const app = express();

// app.use(express.static(path.join(__dirname, '')));
// app.use(bodyParser.urlencoded({extended: false}));

// app.get("/",(req,res)=>{
//     console.log(path.join(__dirname+"./index.html"));
//     res.sendFile(path.join(__dirname+"./index.html"));
// });

// app.post("/api/v1/form",(req,res)=>{
//     // const userName = req.body.name;
//     res.send(`<h1>Done Mr/Mrs ${req.body.name}</h1>
//     <h2>Your email is ${req.body.email}</h2>
//     <h3>Your password is ${req.body.password}</h3>`);
//     console.log(req.body);
// });

// app.listen(port,()=>{
//     console.log(`Server is working on port: ${port}`);
// })




//----------------this part will show data on postman or thunder client you cant get every time form so you have to see the data postman get/post/ delete / -------------------------

// const express = require("express");
// const path = require("path");
// const bodyParser = require("body-parser");
// const exp = require("constants");
// const port = 4000;
// const app = express();

// // app.use(express.static(path.join(__dirname, '')));
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.json());

// app.get("/api/v1/userdata",(req,res)=>{
//     res.json({
//         name: "Subarna",
//         email: "sample@email.com",
//         password: "123",
//     })
// });
// app.post("/api/v1/register",(req,res)=>{
//     const userName = req.body.name;
//     const userEmail = req.body.email;
//     const userPassword = req.body.password;

//     res.json({
//         success:true,
//         name:userName,
//         email:userEmail,
//         password:userPassword,
//     })
// })


// app.listen(port,()=>{
//     console.log(`Server is working on port: ${port}`);
// })


//------------------------------------------send data via api using form ----------------------

// const express = require("express");
// const path = require("path");
// const bodyParser = require("body-parser");
// const exp = require("constants");
// const port = 4000;
// const app = express();

// app.use(express.static(path.join(__dirname, '')));
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.json());

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname+"./index.html"));
// });
// app.post("/api/v1/register",(req,res)=>{
//     const userName = req.body.name;
//     const userEmail = req.body.email;
//     const userPassword = req.body.password;

//     res.json({
//         success:true,
//         name:userName,
//         email:userEmail,
//         password:userPassword,
//     })
// })

// app.listen(port,()=>{
//     console.log(`Server is working on port: ${port}`);
// })



//-----------------------------------------For routing api---------------------------------------------

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const router = require("./userRoutes"); 
const port = 4000;
const app = express();

app.use(express.static(path.join(__dirname, '')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use("/api/v1",router);

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"./index.html"));
});


app.listen(port,()=>{
    console.log(`Server is working on port: ${port}`);
})