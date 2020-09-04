const Order = require('./order');

describe('order class', () => {
    it('returns start time based on cook time plus driving distance', () => {    
        const newOrder = new Order('Pepperoni', 50, 15);

        expect(newOrder.startTime).toEqual(15)
})


}) 

