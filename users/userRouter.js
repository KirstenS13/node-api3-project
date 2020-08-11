const express = require('express');

const router = express.Router();

// Create User
router.post('/', (req, res) => {
  // do your magic!
});

// Create Post
router.post('/:id/posts', (req, res) => {
  // do your magic!
});

// Get Users
router.get('/', (req, res) => {
  // do your magic!
});

// Get User By ID
router.get('/:id', (req, res) => {
  // do your magic!
});

// Get Posts By User ID
router.get('/:id/posts', (req, res) => {
  // do your magic!
});

// Delete User
router.delete('/:id', (req, res) => {
  // do your magic!
});

// Update User
router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
