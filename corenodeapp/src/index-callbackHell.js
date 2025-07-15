//get user,verify the user is valid, show dashboard if valid say admin other say guest

const getUser = (resolve, reject) => {
    console.log('getUser is called')
    //declare mock user
    let user = { name: 'admin' }
    // let user;
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, 'User not found')
    }
}
const login = (user, resolve, reject) => {
    console.log('login is called')
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, 'Login is Success')
    } else {
        setTimeout(reject, 1000, 'Login is Failed')
    }
}
const showDashboard = (status, resolve, reject) => {
    console.log('showDashboard is called')
    if (status === 'Login is Success') {
        setTimeout(resolve, 1000, 'Welcome to Admin')
    } else {
        setTimeout(reject, 1000, 'Welcome  to Guest')
    }
}
function main() {
    getUser(user => {
        login(user, status => {
            showDashboard(status, (admin) => {
                console.log(admin)
            }, err => {
                console.log(err)
            })
        }, err => {
            console.log(err)
        })
    }, err => {
        console.log(err)
    })

}
main()