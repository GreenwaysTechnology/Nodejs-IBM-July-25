const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

broker.createService({
    name: "math",
    actions: {
        add: {
            //meta information
            params: {
                a: { type: "number", positive: true, integer: true, default: 0 },
                b: { type: "number", positive: true, integer: true, default: 0 }
            },
            handler(ctx) {
                const { a, b } = ctx.params
                return this.add(a, b)
            }
        }
    },
    methods: {
        add(a, b) {
            return a + b
        }
    },
    //life cycle methods
    created() {
        console.log('service is created')
    },
    merged() {
        console.log('service is merged')
    },
    async started() {
        console.log('service is started ')
    },
    async stoped() {
        console.log('service is stopped')
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