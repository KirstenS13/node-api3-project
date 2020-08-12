const express = require('express');
const userDb = require("./userDb")
const { validateUserId, validateUser } = require('../middleware/user');

const router = express.Router();

// Create User
router.post('/', validateUser(), (req, res) => {
  // do your magic!
  userDb.insert(req.body.name)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "An error occurred while creating the user."
      });
    });
});

// Create Post
router.post('/:id/posts', validateUserId(), (req, res) => {
  // do your magic!
});

// Get Users
router.get('/', (req, res) => {
  // do your magic!
  userDb.get()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "An error occurred while retrieving the information. Please try again later." })
    })
});

// Get User By ID
router.get('/:id', validateUserId(), (req, res) => {
  // do your magic!
  // the validateUserId does all the code for this endpoint, so we just send back the response
  res.status(200).json(req.user);
});

// Get Posts By User ID
router.get('/:id/posts', validateUserId(), (req, res) => {
  // do your magic!
});

// Delete User
router.delete('/:id', validateUserId(), (req, res) => {
  // do your magic!
});

// Update User
router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware
// moved code to middleware/user.js


module.exports = router;
