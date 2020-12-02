const connection = require('./connection.js');

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }



const orm = {
    selectAll: (tableInput, cb) => {
        const query = `SELECT * FROM ${tableInput};`;
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },

    insertOne: (tableInput, cols, values, cb) => {
        const query = `INSERT INTO ${tableInput} (${cols.toString()} VALUES (${printQuestionMarks(values.length)});`
        connection.query(query, values, (err, res) => {
            if (err) throw err;

            cb(res);
        })
    },

    updateOne: (tableInput, value, burgerName,  cb) => {
        const query = `UPDATE ${tableInput} SET devoured = ${value} WHERE burger_name = ?`;

        connection.query(query, [burgerName], (err, res) => {
            if (err) throw err;

            cb(res);
        })
    }
}

module.exports = orm;

