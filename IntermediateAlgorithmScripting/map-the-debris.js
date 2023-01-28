function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const newArr = [];

    const period = (obj) => {
        let t = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM));
        return { name: obj.name, orbitalPeriod: t }
    }
    for (let elem in arr) {
        newArr.push(period(arr[elem]));
    }
    return newArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);