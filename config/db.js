const mongoose = require('mongoose');
const config = require('config');// jo bhi server folder h and ise jha bhi config milega vha chla jaega and data nikal ke de dega


const dbUrl = config.get("mongoURL")

//async kyuki yeah wait krega kyukyi internet mongo db se connect hone mein time lgta h
const connectDB = async ()=>{
    try{
        await mongoose.connect(dbUrl, {
            //builtin funvtion --url mein error nhi dega ache se parse krke dega and chances of error less
            useNewUrlParser: true,
        })
        console.log("Connected to database")    
    }catch(err){
        console.log(err);
    }
}

//node ka function aise export krte h and index.js mein import and call krenge ise
module.exports = connectDB