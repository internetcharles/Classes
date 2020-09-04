class Schedule {
    #schedule = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

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
}

module.exports = Schedule;