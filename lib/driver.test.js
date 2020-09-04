const Driver = require('./driver');
const Schedule = require('./schedule');

describe('driver class', () => {
    it('does something', () => {
        const schedule = new Schedule();
        const Phil = new Driver('Phil', schedule);

        expect(Phil.name).toEqual('Phil');
    })
})