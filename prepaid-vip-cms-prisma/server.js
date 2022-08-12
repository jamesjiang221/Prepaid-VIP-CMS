const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json());
app.use(cors({
    origin: 'https://localhost:3000'
}))

app.get("/", (req, res) => {
    res.send("Welcome to Prepaid-VIP-CMS API v0.1")
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

