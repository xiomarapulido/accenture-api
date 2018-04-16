const creditRequests = require('./../models/creditRequests')

const ERRORS = {
    GETTING_LIST: 'Ocurrió un error al consultar solicitudes de crédito.',
    ADDED_CREDIT: 'Ocurrió un error al registrar la solicitud.',
    ADDED_CREDITEXIST: 'Ya cuenta con una solicitud de crédito en proceso.'
}
const RESPONSE = {
    ADD_CREDIT: 'La solicitud de crédito fue registrada correctamente.'
}

const listCreditRequests = ({ id, clientId, state }) => {
    let query = {}
    if (id) query._id = { $in: [id, String(id)] }
    if (clientId) query.clientId = clientId
    if (state) query.state = state
    try {
        console.log('entra', query)
        const credit = creditRequests.find(query).exec().then((credit) => {
            console.log('credit empty', credit)
            if (credit) {
                return credit
            }

            return []
        })

        return credit
    } catch (error) {
        console.log(error)
        return new Error(ERRORS.GETTING_LIST)
    }
}

const addCreditRequests = async ({ clientId, nameCompany, nitCompany, currentSalary, admissionDate, state }) => {
    var credit = new creditRequests({
        clientId,
        nameCompany,
        nitCompany,
        currentSalary,
        admissionDate,
        state,
        registerDate: Date.now()
    })

    const creditExist = await listCreditRequests(credit).then(creditList => creditList)

    if (!creditExist.length) {
        credit.save()
        return RESPONSE.ADD_CREDIT
    }
    else {
        return ERRORS.ADDED_CREDITEXIST
    }
}
module.exports = { listCreditRequests, addCreditRequests }