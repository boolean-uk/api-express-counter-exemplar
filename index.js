const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()
const port = 3030

let counters = {
  cars: 0,
  animals: 0
}

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.get("/counter/:name", (req, res) => {
  console.log(req.params)
  const counter = counters[req.params.name]
  res.json({counter: counter})
})

app.post('/counter/:name/increment', (req, res) => {
  counters[req.params.name]++
  res.json({counter: counters[req.params.name]})
})

app.post('/counter/:name/decrement', (req, res) => {
  counters[req.params.name]--
  res.json({counter: counters[req.params.name]})
})

app.post('/counter/:name/double', (req, res) => {
  counters[req.params.name]*=2
  res.json({counter: counters[req.params.name]})
})

app.delete('/counter/:name', (req, res) => {
  counters[req.params] = 0
  res.json({counter: counters[req.params.name]})
})

app.put('/counter/:name', (req, res) => {
  if (req.query.value) {
    counters[req.params.name] = Number(req.query.value)
  }
  res.json({counter: counters[req.params.name]})
})

app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})
