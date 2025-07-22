const { ServiceBroker } = require('moleculer')

//Create Service Broker Object
const broker = new ServiceBroker()


function main() {
    broker.start().then(() => {
        console.log('Broker is ready!')
    }).catch(err => {
        console.log('Broker got Failed', err)
    })
}
main()