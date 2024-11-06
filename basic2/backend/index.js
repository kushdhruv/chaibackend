import express from 'express'

const app=express()
const port=process.env.PORT||3000

//app.get('/',(req,res)=>{
  //  res.send("Server is ready")
//});

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'A Joke',
            content:'This is First Joke',
        },
        {
            id:2,
            title:'A Joke',
            content:'This is Second Joke',
        },
        {
            id:3,
            title:'A Joke',
            content:'This is Third Joke',
        },
    ];
    res.send(jokes);
});

app.listen(port,()=>{
    console.log(`Server at https://localhost:${port}`)
});