const Form = require("../models/Blog");

module.exports = {
  index: (req, res) => {
    Form.find({}).then(post => {
      res.json(post);
    });
  },
  showAuthor: (req, res) => {
    Form.find({ author: req.params.author }).then(blog => {
      res.json(blog);
    });
  },
  showCourseWeek: (req, res) => {
    Form.find({ courseWeek: req.params.courseWeek }).then(blog => {
      res.json(blog);
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
