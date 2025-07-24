const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    serializer: "JSON" // not necessary to set, because it is the default
})
broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay]
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