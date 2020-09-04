const Schedule = require('./schedule');


describe('schedule class', () => {
    it('returns first open minute at 0', () => {
        const newSchedule = new Schedule();
        newSchedule.print();
        expect(newSchedule.nextOpenMinute()).toEqual(0);
    });

    // it('makes all minutes false', ()  => {
    //     const newSchedule = new Schedule();
    //     newSchedule.clear()
    //     expect(newSchedule).toEqual([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);

    // })
    
})