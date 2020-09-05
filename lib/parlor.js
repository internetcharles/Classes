class Parlor {

    #drivers = [];
    #orders = [];

    #calculateSchedule() {
        this.#orders.forEach(order => {
            this.#drivers.forEach(driver => {
                !driver.currentSchedule.freeWindow(order.startMinute, order.deliveryMinute) ? driver.currentSchedule.addOrder(order) : null
            })
        })
    }

    addDriver(driver) {
        this.#drivers.push(driver);
        this.#calculateSchedule();
    }

    addOrder(order) {
        this.#orders.push(order);
        this.#calculateSchedule();
    }

    printSchedule() {
        this.#drivers.forEach(driver => {
            driver.currentSchedule.print();
        })
    }
}

module.exports = Parlor;