const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    serializer: "JSON" // not necessary to set, because it is the default
})

//calling 
//http://localhost:3000/api/servicename/methodname
broker.createService({
    name: 'greeter',
    actions: {
        sayGreet() {
            return 'Greet Microservices'
        },
        sayHello() {
            return 'Hello Microservices'
        },
        sayHai() {
            return 'Hai Microservices'
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
                whitelist: [
                    // this method is available outside
                    "greeter.sayHello"
                ]
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