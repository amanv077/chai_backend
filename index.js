require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('GET request received at /')
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    console.log('GET request received at /twitter')
    res.send('hellooo')
})
app.listen(process.env.PORT, () => {
  console.log(`Express server listening on port ${process.env.PORT}`)
 })
