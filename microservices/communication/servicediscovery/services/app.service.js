const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    registry: {
        discoverer: 'Local',
        strategy: "RoundRobin"
        //  discoverer: "redis://localhost:6379"
    }
})


broker.createService({
    name: "math",
    actions: {
        add: {
            //meta information
            params: {
                a: { type: "number", positive: true, integer: true, default: 0 },
                b: { type: "number", positive: true, integer: true, default: 0 }
            },
            handler(ctx) {
                const { a, b } = ctx.params
                const response = ctx.call('calculator.add', { a, b })
                return response
            }
        }
    }
})

async function main() {
    try {
        await broker.start()
        //will start interactive commandline tool
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()
