const Order = require("./order");

class Schedule {
    #schedule = [...Array(1440)].fill(false);

    #scheduleVisualizer = [];
    

    nextOpenMinute() {
        return this.#schedule.findIndex(item => item === false);
    }

    clear() {
        this.#schedule.forEach(item => item = false);
    }

    print() {
        this.#schedule.forEach((minute) => {
            minute === true? this.#scheduleVisualizer.push('Busy') : this.#scheduleVisualizer.push('Free')
        })
        console.log(this.#scheduleVisualizer)};

    addOrder(order) {
        for (let i = order.startMinute; i <= order.deliveryMinute; i++) {
            this.#schedule[i] = true;
        }
    }
}



module.exports = Schedule;