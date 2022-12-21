const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(usersObj) {
    let i = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            i++;
        }
    }
    return i;
}

console.log(countOnline(users));