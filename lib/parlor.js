class Parlor {

    #drivers = [];
    #orders = [];

    #calculateSchedule() {
        this.#orders.forEach(order => {
            this.#drivers.forEach(driver => {
                !driver.currentSchedule.indexOf(order.startMinute) ? driver.currentSchedule.addOrder(order) : null
            })
        })
    }

    addDriver(driver) {
        this.#drivers.push(driver);
        this.#calculateSchedule();
    }
}