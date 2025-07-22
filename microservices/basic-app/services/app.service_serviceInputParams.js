const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

broker.createService({
    name: 'math',
    actions: {
        multiply(ctx) {
            // const params = ctx.params
            // return params.a * params * b
            const { a, b,c } = ctx.params
            return a * b
        }
    }
})


async function main() {
    try {
        await broker.start()
        const res = await broker.call('math.multiply', { a: 10, b: 20 })
        console.log(`The Result is ${res}`)
    }
    catch (err) {
        console.log('Broker is Failed to start', err)
    }
}
main()