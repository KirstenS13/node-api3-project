const userDb = require('../users/userDb');

function validateUserId() {
    // do your magic!
    // don't forget to wrap your code in a returned arrow function
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

function validateUser() {
    // do your magic!
    return (req, res, next) => {
        console.log("validateUser req.body", req.body);
        // {} is still a truthy value
        if (!req.body) {
            res.status(400).json({ message: "Missing user data" });
        } else if (!req.body.name) {
            res.status(400).json({ message: "missing required name field" });
        } else {
            next();
        };
    };
};

function validatePost(req, res, next) {
    // do your magic!
    
};

module.exports = {
    validateUserId,
    validateUser,
    validatePost
};