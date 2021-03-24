// code away!
const express = require("express");
const server = require("./server");
const userRouter = require("./users/userRouter");

// add middleware
server.use(express.json());
// "/users" means that /users will come before each path defined in userRouter ("/:id" is actually "/users/:id")
server.use("/users" ,userRouter);

// 4 - have server listen
server.listen(8080, () => {
    console.log("Server running on http://localhost:8080")
});