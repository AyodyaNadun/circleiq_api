const express = require("express");

// user routes controllers
const { getAllUsers } = require("../controller/userController/getAllUsers-controller");
const { createUser } = require("../controller/userController/createUser-controller");
const { getUser } = require("../controller/userController/getUser-controller");
const { updateUser } = require("../controller/userController/updateUser-controller");
const { deleteUser } = require("../controller/userController/deleteUser-controller");

const router = express.Router();

// user route paths
router.route('/')
.get(getAllUsers)
.post(createUser);

router.route('/:id')
.get(getUser)
.put(updateUser)
.delete(deleteUser);

module.exports = router;