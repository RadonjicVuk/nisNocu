import express from "express"
import userRoute from "./api/user.js"

const app = express()

app.use("/api/user", userRoute)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))