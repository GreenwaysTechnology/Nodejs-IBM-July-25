//blocking and non blocking difference

function blockMe(message) {
    console.log(message)
}
function greet(hello) {
    //non blocking api -
    setTimeout(hello, 5000,'Hello')
}

function main() {
    blockMe('start')
    greet((message) => console.log(message))
    blockMe('end')
}
main()