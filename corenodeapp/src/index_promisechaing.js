//get user,verify the user is valid, show dashboard if valid say admin other say guest

const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
        //declare mock user
        let user = { name: 'admin' }
        // let user;
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, 'User not found')
        }
    })
}
const login = user => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, 'Login is Success')
        } else {
            setTimeout(reject, 1000, 'Login is Failed')
        }
    })
}
const showDashboard = status => {
    console.log('showDashboard is called')
    return new Promise((resolve, reject) => {
        if (status === 'Login is Success') {
            setTimeout(resolve, 1000, 'Welcome to Admin')
        } else {
            setTimeout(reject, 1000, 'Welcome  to Guest')
        }
    })
}
function main() {
    // getUser(user => {
    //     login(user, status => {
    //         showDashboard(status, (admin) => {
    //             console.log(admin)
    //         }, err => {
    //             console.log(err)
    //         })
    //     }, err => {
    //         console.log(err)
    //     })
    // }, err => {
    //     console.log(err)
    // })

    // getUser()
    //     .then(user => {
    //     login(user)
    //         .then(status => {
    //             showDashboard(status)
    //                 .then(page => console.log(page))
    //                 .catch(err => console.log(err))
    //         })
    //         .catch(err => console.log(err))
    // }).catch(err => console.log(err))

    // getUser()
    //     .then(user => {
    //         return login(user)
    //     })
    //     .then(status => {
    //         return showDashboard(status)
    //     })
    //     .then(page => { console.log(page) })
    //     .catch(err => console.log(err))
    getUser()
        .then(user => login(user))
        .then(status => showDashboard(status))
        .then(page => console.log(page))
        .catch(err => console.log(err))

}
main()