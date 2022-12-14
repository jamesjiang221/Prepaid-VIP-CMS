const db = require("../models");
// console.log(db.model.clientInfo);
const ClientInfo = db.model.clientInfo;
// console.log(ClientInfo);
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {

};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const clientName = req.query.client_name;
    var condition = clientName ? { client_name: { [Op.like]: `%${clientName}%` } } : null;
    ClientInfo.findAll({ where: condition })
        .then(data => {
            res.send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        }
    );
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};