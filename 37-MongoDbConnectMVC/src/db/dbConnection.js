import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connect MongoDB")
}).catch(()=>{
    console.log("Server not connect MongoDB")
})