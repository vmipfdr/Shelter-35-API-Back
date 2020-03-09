const Form = require("../models/Form");

module.exports = {
  index: (req, res) => {
    Form.find({}).then(country => {
      res.json(country);
    });
  },
  showRegion: (req, res) => {
    Form.find({ region: req.params.region }).then(country => {
      res.json(country);
    });
  },
  showCode: (req, res) => {
    Form.find({ alpha3Code: req.params.alpha3Code }).then(country => {
      res.json(country);
    });
  },
  showName: (req, res) => {
    Form.find({ name: req.params.name }).then(country => {
      res.json(country);
    });
  },
  create: (req, res) => {
    Form.create(req.body).then(country => {
      res.json(country);
    });
  },
  edit: (req, res) => {
    Form.findOneAndUpdate({ name: req.params.name }, req.body).then(country => {
      res.json(country);
    });
  },
  delete: (req, res) => {
    Form.findOneAndDelete({ name: req.params.name }).then(country => {
      res.json(country);
    });
  }
};
