const express= require("express");
const app = express();
const bookRoutes=require('./routes/bookRoutes')
app.use(express.json()); 


app.use('/books',bookRoutes)
const port=3006;

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
})