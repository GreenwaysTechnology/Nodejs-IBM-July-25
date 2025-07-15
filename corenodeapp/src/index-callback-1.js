//blocking and non blocking difference

function blockMe(message) {
    console.log(message)
}
function greet(hello) {
    //non blocking api -
    setTimeout(hello, 5000)
}

function main() {
    blockMe('start')
    greet(function () {
        console.log('greet')
    })
    blockMe('end')
}
main()