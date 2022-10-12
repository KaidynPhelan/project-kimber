const express = require('express')
const app = express()
PORT = 3000

app.get("/home",(req,res) => {
    res.json({"users": ["userOne", "usertwo", "userThree"]})
})

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})