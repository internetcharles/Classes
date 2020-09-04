const Order = require('./order');

describe('order class', () => {
    it('returns start time based on cook time plus driving distance', () => {    
        const newOrder = new Order('Pepperoni', 50, 15);

        expect(newOrder.startMinute).toEqual(15)
})
    it('returns the entire order object', () => {
        const testOrder = new Order('Cheese', 100, 10)

        expect(testOrder).toEqual(
            {"deliveryMinute": 100, "name": "Cheese", "startMinute": 70}
        )
    })

}) 

