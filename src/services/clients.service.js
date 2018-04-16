const Client = require('./../models/client')

const ERRORS = {
    GETTING_LIST: 'Ocurrió un error al consultar los clientes.',
    ADDED_CLIENT: 'Ocurrió un error al registrar al cliente.',
    ADDED_CLIENTEXIST: 'El cliente ya se encuentra registrado.',
}
const RESPONSE = {
    ADD_CLIENT: 'El cliente fue registrado correctamente.'
}

const listClients = ({ id, typeDocument, numberDocument }) => {
    let query = {}
    if (id) query._id = { $in: [id, String(id)] }
    if (typeDocument) query.typeDocument = typeDocument
    if (numberDocument) query.numberDocument = numberDocument
    try {
        const clients = Client.find(query).exec().then((client) => {
            if (client) {
                return client
            }

            return []
        })

        return clients
    } catch (error) {
        return new Error(ERRORS.GETTING_LIST)
    }
}

const addClient = async ({ typeDocument, numberDocument, name, lastName, birthdate }) => {
    var client = new Client({
        typeDocument,
        numberDocument,
        name,
        lastName,
        birthdate,
        registerDate: Date.now()
    })

    const clientExist = await listClients(client).then(clientList => clientList)

    if (!clientExist.length) {
        client.save()
        return RESPONSE.ADD_CLIENT
    }
    else {
        return ERRORS.ADDED_CLIENTEXIST
    }
}
module.exports = { listClients, addClient }