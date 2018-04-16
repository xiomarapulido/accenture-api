'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClientSchema = Schema({
    id: Number,
    typeDocument: Number,
    numberDocument: Number,
    name: String,
    lastName: String,
    birthdate: Date,
    registerDate: Date
})

module.exports = mongoose.model('Client', ClientSchema)