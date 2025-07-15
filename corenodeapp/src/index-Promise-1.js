
function blockMe(message) {
    console.log(message)
}
function getPromise() {
    return Promise.resolve('Hello')
}

function main() {
    blockMe('start')
    getPromise().then(status => console.log(status))
    blockMe('end')
}
main()