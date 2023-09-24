import express from "express"
import cors from "cors"
import mongoConnect from "./models/db.js"
import authentication from "./routes/authentication.js"

const PORT = process.env.PORT || 8080

mongoConnect()
const app = express()

app.use(cors())
app.use(express.json())

app.use("/apiAuth",authentication)

app.listen(PORT, ()=>{
    console.log("App is running");
})