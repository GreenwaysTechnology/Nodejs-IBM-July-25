const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    transporter: 'TCP',
    registry: {
        strategy: 'RoundRobin'
    }
})


broker.createService({
    name: 'calculator',
    actions: {
        add: {
            handler(ctx) {
                const { a, b } = ctx.params
                return `${a + b} from ${ctx.nodeID}`
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
