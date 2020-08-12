const userDb = require('../users/userDb');

function validateUserId() {
    // do your magic!
    return (req, res, next) => {
        userDb.getById(req.params.id)
            .then(user => {
                if (user) {
                    req.user = user;
                    next();
                } else {
                    res.status(404).json({ 
                        message: "No user is associated with that ID." 
                    });
                };
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ message: "An error occurred while retrieving the user. Please try again later." });
            });
    };
};

function validateUser(req, res, next) {
    // do your magic!
};

function validatePost(req, res, next) {
    // do your magic!
};

module.exports = {
    validateUserId,
    validateUser,
    validatePost
};