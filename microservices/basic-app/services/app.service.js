const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

broker.createService({
    name: 'math',
    actions: {
        //syntax   1:
        // multiply(ctx) {
        //     const { a, b } = ctx.params
        //     return a * b
        // }
        //syntax 2:

        multiply: {
            //meta information/extra information of that method like validation
            params: {
                a: 'number',
                b: {
                    type: 'number', positive: true, integer: true
                }
            },
            handler(ctx) {
                const { a, b } = ctx.params
                return a * b
            }
        }
    }
})


async function main() {
    try {
        await broker.start()
        // const res = await broker.call('math.multiply', { a: 10, b: 20 })
        // const res = await broker.call('math.multiply', { a: '10', b: 20 })
        // const res = await broker.call('math.multiply', { a: 10, b: -20 })
        const res = await broker.call('math.multiply', { a: 10, b: 20.5 })


        console.log(`The Result is ${res}`)
    }
    catch (err) {
        console.log('Broker is Failed to start', err)
    }
}
main()