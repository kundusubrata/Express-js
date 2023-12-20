const express = require("express");
const registerUser = require("./userController");
// const showUser = require("./userController");
const router = express.Router();

router.route("/register").post(registerUser);
// router.route("/api/v1/register").post(registerUser);-------> You can write this way or router.route("/api/v1/register").post(registerUser).get((req,res),=>{
//     res.send("wow");
// }) ---------or if you want ot organize then create module and export it.

// router.route("/api/v1/register").get(showUser);

router.route("/login").get(registerUser);
router.route("/product").delete(registerUser);

module.exports = router;