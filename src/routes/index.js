const { Router } = require('express')

const router = Router()
const hotelCtrl = require('./../controllers/hotel.controller')
const clientCtrl = require('./../controllers/client.controller')
const creditCtrl = require('./../controllers/creditRequests.controller')

router.route('/hotel')
    .get(hotelCtrl.listHotels)

router.route('/client')
    .get(clientCtrl.listClients)
    .post(clientCtrl.addClient)

router.route('/credit')
    .get(creditCtrl.listCreditRequests)
    .post(creditCtrl.addCreditRequests)

module.exports = router