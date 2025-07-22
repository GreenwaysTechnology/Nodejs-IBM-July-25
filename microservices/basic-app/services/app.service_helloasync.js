const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()


async function main() {
    try {
        await broker.start()
        console.log('Broker is Ready!')
    }
    catch (err) {
        console.log('Broker is Failed to start', err)
    }
}
main()