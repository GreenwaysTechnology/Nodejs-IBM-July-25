const { ServiceBroker } = require('moleculer')

//broker configuration ; broker schema configuration
const broker = new ServiceBroker({
    transporter: 'TCP'
})

broker.createService({
    name: 'calculator',
    actions: {
        add: {
            handler(ctx) {
                const { a, b } = ctx.params
                //return `From Calculator ${a + b}`
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
