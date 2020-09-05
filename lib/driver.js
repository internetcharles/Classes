const Schedule = require("./schedule");

class Driver {
    currentSchedule = new Schedule();
    name;

    constructor(name) {
        this.name = name;
    }
}

module.exports = Driver;