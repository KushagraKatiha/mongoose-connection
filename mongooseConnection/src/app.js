import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })
  
app.get("/twitter", (req,res)=>{
      res.send("<h1>@kushagrakatiha</h1>")
  })

  
export default app;
