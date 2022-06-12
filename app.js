const express = require("express")
const db = require("./database/db")

const PORT = 3000

const app = express()

// set built-in middleware for getting html form req.body
app.use(express.urlencoded({ extended: true }))
// set built-in middleware for getting json req.body
app.use(express.json())

// set posts router
const postsRouter = require("./routes/posts")
app.use("/posts", postsRouter)

app.listen(PORT, () => console.log(`Express Server started on port ${PORT}`))
