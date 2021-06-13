// const express=require('express');
// const app=express();
// const bodyParser=require('body-parser');
// const mongoose=require('mongoose')
// const router=require('./router/api');
// const dotenv=require('dotenv');
// dotenv.config();

// const connectionParams = {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// }
// mongoose.connect(process.env.DB_CONNECT,connectionParams).then(()=>console.log("connected")).catch((err)=>console.log(err))
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

// app.use(bodyParser.json());

// // app.use((req, res, next) => {
// //     res.header("Access-Control-Allow-Origin", "*");
// //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authoriztion");
// //     if (req.method === "OPTIONS") {
// //         res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
// //         return res.status(200).json({});
// //     }
// //     next();
// // });

// // app.use('/',router);

// app.listen(4000,()=>{console.log('listen in port 4000')});
const express=require("express")
const app=express()
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const router=require("./router/api")
const bodyParser=require('body-parser')
dotenv.config()

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.DB_CONNECT,connectionParams).then(()=>console.log("connected")).catch((err)=>console.log(err))
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authoriztion");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});


app.use('/', router)
app.get("/",(req,res)=>{
    console.log(req.body)
})

app.listen(4000,()=>{console.log("listen in 9000")})




