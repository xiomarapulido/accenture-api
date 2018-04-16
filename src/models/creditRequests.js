'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const creditRequestsSchema = Schema({
    id: Number,
    clientId: String,
    nameCompany: String,
    nitCompany: Number,
    currentSalary: Number,
    admissionDate: Date,
    registerDate: Date,
    state: String
})

module.exports = mongoose.model('creditRequests', creditRequestsSchema)
