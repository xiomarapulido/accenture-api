const { OK, CREATED, NOT_FOUND, INTERNAL_SERVER_ERROR } = require('http-status')
const { sanitize, validate } = require('schema-inspector')
const validator = require('./../validations/client.validator')
const responses = require('./../utils/responses')
const services = require('./../services/clients.service')
const Client = require('./../models/client')

async function listClients({ query }, res) {
    sanitize(validator.sanitization, query)
    const validation = validate(validator.validationFilter, query)

    if (!validation.valid)
        return responses.defaultErrorValidation(res, validation.format())

    return responses.default(res, services.listClients(query))
}

async function addClient({ body }, res) {
    sanitize(validator.sanitization, body)
    const validation = validate(validator.validation, body)

    if (!validation.valid)
        return responses.defaultErrorValidation(res, validation.format())
        
    try {
        const data = await services.addClient(body)
        res.status(OK).send({
            success: true,
            data,
        })    
    } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).send({
            success: false,
            error,
        })
    }
}

module.exports = { listClients, addClient }
