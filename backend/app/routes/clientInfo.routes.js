module.exports = (app) => {
    const clientInfo = require('../controllers/clientInfo.controller');
    var router = require('express').Router();

    // Create a new ClientInfo
    router.post('/create', clientInfo.create);

    // Retrieve all ClientInfos
    router.get('/getAll', clientInfo.findAll);

    app.use('/api/clientInfo', router);
}
