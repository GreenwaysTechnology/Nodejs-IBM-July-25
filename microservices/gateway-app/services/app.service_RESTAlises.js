const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    serializer: "JSON" // not necessary to set, because it is the default
})

broker.createService({
    name: 'products',
    actions: {
        list: {
            handler(ctx) {
                return 'Get all Products'
            }
        },
        get: {
            handler(ctx) {
                const params = ctx.params
                console.log(params)
                return 'Get Products By Id ' + params.id
            }
        },
        create: {
            handler(ctx) {
                const payload = ctx.params
                console.log(payload)
                return 'Post  Products'
            }
        },
        update: {
            handler(ctx) {
                return 'Update all Products'
            }
        },
        remove: {
            handler(ctx) {
                return 'Remove  Products'
            }
        }
    }
})

broker.createService({
    name: 'customers',
    actions: {
        list: {
            handler(ctx) {
                return 'Get all customers'
            }
        },
        get: {
            handler(ctx) {
                const params = ctx.params
                console.log(params)
                return 'Get customers By Id ' + params.id
            }
        },
        create: {
            handler(ctx) {
                const payload = ctx.params
                console.log(payload)
                return 'Post  customers'
            }
        },
        update: {
            handler(ctx) {
                return 'Update customers'
            }
        },
        remove: {
            handler(ctx) {
                return 'Remove  customers'
            }
        }
    }
})

broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    settings: {
        routes: [
            {
                path: '/api',
                aliases: {
                    "REST products": "products",
                    "REST customers ": "customers"
                }
            }
        ]
    }
})

async function main() {
    try {
        await broker.start()
    }
    catch (err) {
        console.log(err)
    }
}
main()