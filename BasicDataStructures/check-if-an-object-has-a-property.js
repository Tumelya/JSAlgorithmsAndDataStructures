let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    return 'Alan' in userObj && 'Jeff' in userObj && 'Sarah' in userObj && 'Ryan' in userObj;
}

console.log(isEveryoneHere(users));