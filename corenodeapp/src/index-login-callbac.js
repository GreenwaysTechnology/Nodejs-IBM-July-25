
const login = (userName, password, resolve, reject) => {
    //biz logic
    if (userName === 'admin' && password === 'admin') {
        setTimeout(resolve, 1000, 'Login Success')
    } else {
        setTimeout(reject, 1000, 'Login failed')
    }
}


function main() {
    login('admin', 'admin', (status) => { console.log(status) }, (err) => { console.log(err) })
    login('xx', 'yy', (status) => { console.log(status) }, (err) => { console.log(err) })

}
main()