const Schedule = require('./schedule');
const Order = require('./order');


describe('schedule class', () => {

    const newSchedule = new Schedule();

    it('returns first open minute', () => {
        const newOrder = new Order('Pepperoni', 14, 5);
        newSchedule.addOrder(newOrder)
        expect(newSchedule.nextOpenMinute()).toEqual(15);
    });

    // it('makes all minutes false', ()  => {
    //     const newSchedule = new Schedule();
    //     newSchedule.clear();
    //     expect(newSchedule).toEqual([...Array(1440)].fill(false));

    // })
    
})