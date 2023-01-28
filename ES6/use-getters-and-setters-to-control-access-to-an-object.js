class Thermostat {
    constructor(temperatureFahrenheit) {
        this.tempC = 5 / 9 * (temperatureFahrenheit - 32);
    }
    //getter
    get temperature() {
        return this.tempC;
    }
    //setter
    set temperature(newTemperature) {
        this.tempC = newTemperature;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius