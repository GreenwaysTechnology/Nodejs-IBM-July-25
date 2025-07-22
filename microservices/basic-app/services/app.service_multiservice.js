const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

//create a service: having biz logic
broker.createService({
    name: 'hello', //define name of the service
    actions: {
        //where biz logic goes
        sayHello() {
            return 'Hello Moleculer'
        }
    }
})
broker.createService({
    name: 'hai', //define name of the service
    actions: {
        //where biz logic goes
        sayHai() {
            return 'Hai Moleculer'
        }
    }
})
broker.createService({
    name: 'math', //define name of the service
    actions: {
        add() {
            return 10 + 10
        },
        multiply() {
            return 10 * 10
        }
    }
})

async function main() {
    try {
        await broker.start()
        //when broker ready, you can invoke services
        const hello = await broker.call('hello.sayHello')
        const hai = await broker.call('hai.sayHai')
        const add = await broker.call('math.add')
        const multiply = await broker.call('math.multiply')
        console.log(hello, hai, add, multiply)
    }
    catch (err) {
        console.log('Broker is Failed to start', err)
    }
}
main()