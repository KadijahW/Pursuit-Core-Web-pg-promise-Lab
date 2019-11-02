const express = require('express');
const cors = require('cors')
const app = express();
const port = 4140;
const postRouter = require('./routes/postRouter')

app.use(cors())

app.use(express.urlencoded({
    extended:false
}))

app.use(express.json())

app.use('/posts', postRouter)

app.listen(port,() => {
    console.log("server running")
})