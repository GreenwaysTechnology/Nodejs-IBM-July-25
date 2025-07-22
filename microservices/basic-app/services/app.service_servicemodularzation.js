const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

//load services
broker.loadService('./services/greeter.service')

async function main() {
    try {
        await broker.start()
        const res = await broker.call('welcome.sayHello')
        console.log(res)
    }
    catch (err) {
        console.log('Broker is Failed to start', err)
    }
}
main()