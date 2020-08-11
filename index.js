// code away!
const express = require("express");
const server = require("./server");
const userRouter = require("./users/userRouter");

// add middleware
server.use(express.json());
server.use(userRouter);

// 4 - have server listen
server.listen(8000, () => {
    console.log("Server running on http://localhost:8000")
});