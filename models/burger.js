const orm = require("../config/orm.js");

class Burger {
    constructor() {

    }

    selectAll(cb) {
        orm.selectAll('burgers', res => {
            cb(res);
        })
    }

    insertOne(cols, values, cb) {
        orm.insertOne('burgers', cols, values, res => {
            cb(res);
        })
    }

    updateOne(value, id, cb) {
        orm.updateOne('burgers', value, id, res => {
            cb(res);
        })
    }
}

module.exports = Burger;