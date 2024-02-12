const express = require('express')
const cors = require('cors')

const router = require('./routes')
const path = require("path");
const PORT = process.env["PORT"] || 8080
const app = express()



app.use(cors())
app.use('/api', router)
app.use('/media', express.static(path.join(__dirname, '..', 'resources')))
app.use('/', express.static(path.join(__dirname, '..', 'build')))

app.use(express.json())



app.listen(PORT, () =>{
    console.log("Listening to ", PORT)
})
