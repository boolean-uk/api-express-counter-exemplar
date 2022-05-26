const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()
const port = 3030

let counter = 0

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.get("/counter", (req, res) => {
  res.json({counter: counter})
})

app.post('/counter/increment', (req, res) => {
  counter++
  res.json({counter: counter})
})

app.post('/counter/decrement', (req, res) => {
  counter--
  res.json({counter: counter})
})

app.post('/counter/double', (req, res) => {
  counter*=2
  res.json({counter: counter})
})

app.delete('/counter', (req, res) => {
  counter = 0
  res.json({counter: counter})
})

app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})
