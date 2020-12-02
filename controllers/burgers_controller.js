const express = require("express");

const router = express.router();

const Burger = require("../models/Burger.js");
const burger = new Burger();

router.get("/", (req, res) => {
    burger.selectAll(data => {
        const dataObj = {
            burgers: data
        };

        console.log(dataObj);

        //render here
    })
})

router.post("/api/burgers", (req, res) => {
    burger.insertOne(['burger_name'], [req.body.name], (result) => {
        res.json({ id: result.insertId });
    })
})

router.put('/api/burgers/:id', (req, res) => {

    burger.updateOne(true, id, result => {
        if (result.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
})