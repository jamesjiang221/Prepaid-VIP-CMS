module.exports = (app) => {
    const clientInfo = require('../controllers/clientInfo.controller');
    var router = require('express').Router();

    // Create a new ClientInfo
    app.post('/clientInfo/create', clientInfo.create);

    // Retrieve all ClientInfos
    app.get('/clientInfo/getAll', clientInfo.findAll);

    app.use('/api/clientInfo', router);
}
