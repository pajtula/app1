import express from "express";
const app = express()
app.use(express.json())


app.listen(1111,()=>{
    console.log('Connected!')
})