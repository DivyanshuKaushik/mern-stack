const mongoose = require('mongoose')

mongoose.connect(process.env.DB,{useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true })
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));

module.exports 