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
                return 'Get Products By Id'
            }
        },
        create: {
            handler(ctx) {
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
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    settings: {
        routes: [
            {
                path: '/api',
                aliases: {
                    "GET products": "products.list",
                    "GET products/:id": "products.get", //products/1 products/2 
                    "POST products": "products.create",
                    "PUT products/:id": "products.update",
                    "DELETE products/:id": "products.remove"
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