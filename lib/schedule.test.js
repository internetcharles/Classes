const Schedule = require('./schedule');
const Order = require('./order');


describe('schedule class', () => {

    const newSchedule = new Schedule();
    const newOrder = new Order('Pepperoni', 20, 0);

    it('returns first open minute', () => {
        newSchedule.addOrder(newOrder);
        expect(newSchedule.nextOpenMinute()).toEqual(21);
    });

    it('tests free window', () => {
        console.log(newSchedule.freeWindow(0, 20))
        expect(newSchedule.freeWindow(0, 20)).toEqual(true);
    })

    it('tests if clear works', () => {
        newSchedule.clear();
        expect(newSchedule.nextOpenMinute()).toEqual(0);
    })

    it('tests free window on cleared array', () => {
        expect(newSchedule.freeWindow(0, 20)).toEqual(false);
    })
    
})