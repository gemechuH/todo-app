const express = require("express")
 
const PORT = 3000

//init app
const app = express()

// view angine
app.set("view engine", "ejs")

//listen server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})