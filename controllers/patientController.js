const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Patient
            .find(req.query)    
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        console.log("patient findByID route hit")
        console.log("req.params.id", req.params.id)
        db.Patient
            .findById(req.params.id)
            .populate("medicines")
            .then(dbModel => {
                console.log(dbModel)
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log("patient controller req.body", req.body)
        db.Patient
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Patient
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Patient
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};