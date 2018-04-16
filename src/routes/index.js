const { Router } = require('express')

const router = Router()
const clientCtrl = require('./../controllers/client.controller')
const creditCtrl = require('./../controllers/creditRequests.controller')

router.route('/client')
    .get(clientCtrl.listClients)
    .post(clientCtrl.addClient)

router.route('/credit')
    .get(creditCtrl.listCreditRequests)
    .post(creditCtrl.addCreditRequests)

module.exports = router