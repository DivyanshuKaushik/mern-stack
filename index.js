const express = require('express')
const path = require('path')
const cookieParser = require("cookie-parser");

require('dotenv').config()

require(`${__dirname}/db/dbconnect`)

const User = require(`${__dirname}/model/user`)

const app = express()

app.use(express.static("./client/build"))

app.use(express.json());
app.use(cookieParser());
// app.use(bodyParser.json());

app.use(require('./router/signup'))
app.use(require('./router/signin'))
app.use(require('./router/about'))

app.get('/api', async(req, res) => {
    const data = await User.find()
    res.send(data)
})


app.listen(process.env.PORT, () => {
    console.log(`server up at port ${process.env.PORT}`);
})



