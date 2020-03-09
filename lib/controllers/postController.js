const Form = require("../models/Form");

module.exports = {
  index: (req, res) => {
    Form.find({}).then(post => {
      res.json(post);
    });
  },
  showTitle: (req, res) => {
    Form.find({ postTitle: req.params.postTitle }).then(post => {
      res.json(post);
    });
  },
  showDate: (req, res) => {
    Form.find({ postDate: req.params.postDate }).then(post => {
      res.json(post);
    });
  },
  showId: (req, res) => {
    Form.find({ _id: req.params._id }).then(post => {
      res.json(post);
    });
  },
  create: (req, res) => {
    Form.create(req.body).then(post => {
      res.json(post);
    });
  },
  edit: (req, res) => {
    Form.findOneAndUpdate({ _id: req.params._id }, req.body).then(post => {
      res.json(post);
    });
  },
  delete: (req, res) => {
    Form.findOneAndDelete({ _id: req.params._id }).then(post => {
      res.json(post);
    });
  }
};
