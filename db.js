const mongoose = require("mongoose");

mongoose 
    .connect(
"mongodb+srv://" + process.env.PASS + "@cluster0.cfkbs.mongodb.net/RS",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,   
    useFindAndModify: false,
}
)
.then(()=> console.log("Connected to MongoDB"))
.catch ((err)=> console.log("Failed to connect to MongoDB",err));
