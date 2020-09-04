const Schedule = require("./schedule");

class Driver {
    currentSchedule = new Schedule();
    name;

    constructor(name, currentSchedule) {
        this.name = name;
        this.currentSchedule = currentSchedule;
    }
}

module.exports = Driver;