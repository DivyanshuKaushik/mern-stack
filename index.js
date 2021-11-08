const express = require('express')
const path = require('path')
const cookieParser = require("cookie-parser");
const cors = require('cors')

require('dotenv').config()

require(`${__dirname}/db/dbconnect`)

const User = require(`${__dirname}/model/user`)

const app = express()

app.use(express.json());
app.use(cookieParser());
// app.use(bodyParser.json());
app.use(cors())

app.use(require('./router/signup'))
app.use(require('./router/signin'))
app.use(require('./router/about'))

if(process.env.NODE_ENV==="production"){
    const path = require('path')
    app.use(express.static(path.join(__dirname, './client/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
    })
}

// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname, './client/build'))
// })

app.get('/api', async(req, res) => {
    const data = await User.find()
    res.send(data)
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server up at port ${port}`);
})



