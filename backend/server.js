const express = require('express');
const cors = require('cors');
const app = express();

const db = require('../backend/app/models');
db.sequelize.sync();

app.use(express.json());
app.use(cors({
    origin: 'https://localhost:3000'
}))

app.get("/", (req, res) => {
    res.send("Welcome to Prepaid-VIP-CMS API v0.2")
})

require('./app/routes/clientInfo.routes')(app);

const PORT = process.env.PORT || 3001;

// const clientRouter = require('./controllers/clientInfo-controller')

// const apiRouter = express.Router();
// app.use('/', apiRouter)

// apiRouter.use('/client', clientRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


