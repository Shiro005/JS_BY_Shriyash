function firstname(name, cb) {
    console.log(name)
    cb('Wayne')
}

function lastname(surname) {
    console.log(surname)
}

firstname('Bruce', lastname)



