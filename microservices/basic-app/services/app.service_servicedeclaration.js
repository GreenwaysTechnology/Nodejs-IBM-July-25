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


async function main() {
    try {
        await broker.start()
        //when broker ready, you can invoke services
       const response=  await broker.call('hello.sayHello')
       console.log(response)
    }
    catch (err) {
        console.log('Broker is Failed to start', err)
    }
}
main()