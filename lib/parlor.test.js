const Parlor = require('./parlor');
const Driver = require('./driver');

describe('parlor class', () => {
    it('adds driver', () => {
        const newParlor = new Parlor();
        const Nick = new Driver('Nick');
        newParlor.addDriver(Nick)
        newParlor.printSchedule();
    })
})