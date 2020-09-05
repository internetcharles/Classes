class Schedule {
    #schedule = [...Array(1440)].fill(false);

    #scheduleVisualizer = [];
    

    nextOpenMinute() {
        return this.#schedule.findIndex(item => !item);
    }

    freeWindow(startMinute, deliveryMinute) {
        const window = this.#schedule.slice(startMinute, deliveryMinute);
        return window.find(element => element === true) ? true : false;
    }

    clear() {
        this.#schedule = [...Array(1440)].fill(false);
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