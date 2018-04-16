const creditRequestsList = {
    sanitization: {
        type: 'object',
        properties: {
            id: {
                type: 'string',
                rules: ['trim']
            },
            clientId: {
                type: 'string',
                rules: ['trim']
            },
            nameCompan: {
                type: 'string'
            },
            nitCompny: {
                type: 'number',
                rules: ['trim']
            },
            currentSalary: {
                type: 'number',
                rules: ['trim']
            },
            admissionDate: {
                type: 'Date',
                rules: ['trim']
            },
            registerDate: {
                type: 'Date',
                rules: ['trim']
            },
            state: {
                type: 'string',
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
            clientId: {
                type: 'string',
                optional: true,
                minLength: 1
            },
            state: {
                type: 'string',
                optional: true,
                minLength: 1
            }
        }
    },
    validation: {
        type: 'object',
        properties: {
            clientId: {
                type: 'string',
                optional: false,
                minLength: 1
            },
            nameCompany: {
                type: 'string',
                optional: false,
                minLength: 1
            },
            nitCompany: {
                type: 'number',
                optional: false,
                minLength: 1
            },
            currentSalary: {
                type: 'number',
                optional: false,
                minLength: 1
            },
            admissionDate: {
                type: 'Date',
                optional: false,
                minLength: 1
            },
            state: {
                type: 'string',
                optional: false,
                minLength: 1
            }
        }
    }
}

module.exports = creditRequestsList