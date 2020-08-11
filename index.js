// code away!
// 1 - bring in express, routers, and any other imports
const express = require("express");
const userRouter = require("./users/userRouter");

// 2 - create server
const server = express();

// 3 - add middleware, including routers
server.use(express.json());
server.use(userRouter);

// 4 - have server listen
server.listen(8000, () => {
    console.log("Server running on http://localhost:8000")
});