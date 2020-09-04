const Schedule = require('./schedule');


describe('schedule class', () => {
    it('returns first open minute at 0', () => {
        const newSchedule = new Schedule();
        expect(newSchedule.nextOpenMinute()).toEqual(0);
    })
})