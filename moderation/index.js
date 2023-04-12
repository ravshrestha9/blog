const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())


app.get('/' , (req, res)=> {

})

app.listen(4003, ()=> {
    console.log('Listening on Port 4003')
})