const express = require("express");

const {
    register,
    login,
} = require("./auth.controller");

const {
    registerValidation,
    loginValidation,
} = require("./auth.validation");

const router = express.Router();

router.post(
    "/register",
    registerValidation,
    register
);

router.post(
    "/login",
    loginValidation,
    login
);

module.exports = router;