const express = require('express');
const prisma = require('@prisma/client');
const clientInfoRouter = express.Router();

// console.log(prisma);

// console.log(`clientinfocontroller.js called`);

clientInfoRouter.get('/getAll', async(req, res) => {
    try {
        const allClientInfo = await prisma.clientInfo.findMany();
        console.log(allClientInfo);

        if (allClientInfo) {
            return res.status(200).json(allClientInfo);
        } else {
            return res.status(404).send("No client info");
        }
    } catch (error) { 
        console.log(error);
        res.status(404).json({
            message: "Cannot retrieve the client info",
            details: {
                errorMessage: error.message,
                errorStack: error.stack,
            }
        });
    } finally {
        await prisma.$disconnect;
    }
})

module.exports = clientInfoRouter