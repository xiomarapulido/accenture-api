const clientList = {
    sanitization: {
        type: 'object',
        properties: {
            id: {
                type: 'string',
                rules: ['trim']
            },
            typeDocument: {
                type: 'number',
                rules: ['trim']
            },
            numberDocument: {
                type: 'number',
                rules: ['trim']
            },
            name: {
                type: 'string'
            },
            lastName: {
                type: 'string'
            },
            birthdate: {
                type: 'Date',
                rules: ['trim']
            },
            registerDate: {
                type: 'Date',
                rules: ['trim']
            }
        }
    },
    validationFilter: {
        type: 'object',
        properties: {
            id: {
                type: 'string',
                optional: true,
                minLength: 1
            }, 
            typeDocument: {
                type: 'number',
                optional: true,
                minLength: 1
            },
            numberDocument: {
                type: 'number',
                optional: true,
                minLength: 1
            }
        }
    }    ,
    validation: {
        type: 'object',
        properties: {            
            typeDocument: {
                type: 'number',
                optional: false,
                minLength: 1
            },
            numberDocument: {
                type: 'number',
                optional: false,
                minLength: 1
            },
            name: {
                type: 'string',
                optional: false,
                minLength: 1
            },
            lastName: {
                type: 'string',
                optional: false,
                minLength: 1
            },
            birthdate: {
                type: 'Date',
                optional: false,
                minLength: 1
            }
        }
    }
}

module.exports = clientList