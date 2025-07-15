
function blockMe(message) {
    console.log(message)
}
function login(userName, password) {
    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            setTimeout(resolve, 1000, 'Login Success')
        } else {
            setTimeout(reject, 1000, 'Login Failed')
        }
    })
}

function main() {
    blockMe('start')
    login('admin', 'admin')
        .then(status => console.log(status))
        .catch(err => console.log(err))
    login('ddd', 'adfa')
        .then(status => console.log(status))
        .catch(err => console.log(err))
    blockMe('end')
}
main()
