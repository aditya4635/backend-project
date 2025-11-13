import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import connectDB from "./db/index.js";

connectDB()
.then(()=>{
    app.listen(process.env.PORT ||8000,()=>{
        console.log(`server is listeninng on PORT ${process.env.PORT ||8000}`)
    })
})
.catch((error)=>{
    console.error('failed to connect db',error)
    process.exit(1);
}
);



/*;( async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error',(error)=>{
            console.error("error",error)
            throw error;
        })

        app.listen(process.env.PORT || 8000,()=>{
            console.error(`server is running on port ${process.env.PORT || 8000}`)
        })
    }
    catch(error){
        
            console.error("could not connect to DB",error)
            throw error;
    }
})
    */