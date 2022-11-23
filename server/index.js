import express from "express";
const app = express()
app.use(express.json())

app.get("/api/x", (req, res) => {     
    return res.status(200).json("Odgovor :-)"); 
  });
app.listen(1111, ()=>{
    console.log('Connected!')
})