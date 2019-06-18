const sqlite = require('sqlite');
const moment = require('moment');
const dbPromise = sqlite.open('./history-events.db', {
    Promise
});

moment.locale('ru');

async function getEvents(req, res) {
    const db = await dbPromise;
    let sql = `SELECT * FROM events`;
    try {
        const result = await Promise.all([db.all(sql)]);
        res.send(result[0]);
    } catch (err) {
        return err;
    }
};


exports.getEvents = getEvents;