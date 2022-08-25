const User = require("../model/models");
// const User = db.user;
// Create and Save a new User
exports.create = (req, res) => {
  
};
// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;

  User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
// Find a single User with an id
exports.findOne = (req, res) => {
  
};
// Update a User by the id in the request
exports.update = (req, res) => {
  
};
// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Users
exports.findAllPublished = (req, res) => {
  
};