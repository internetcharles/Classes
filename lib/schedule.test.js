const Schedule = require('./schedule');
const Order = require('./order');


describe('schedule class', () => {

    const newSchedule = new Schedule();

    it('returns first open minute', () => {
        const newOrder = new Order('Pepperoni', 20, 0);
        newSchedule.addOrder(newOrder);
        expect(newSchedule.nextOpenMinute()).toEqual(21);
    });

    it('tests if clear works', () => {
        newSchedule.clear();
        expect(newSchedule.nextOpenMinute()).toEqual(0);
    })
    
})