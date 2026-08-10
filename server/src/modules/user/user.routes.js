const express = require("express");

const {
    getMyProfile,
    updateMyProfile,
} = require("./user.controller");

const authMiddleware = require("../../middleware/auth.middleware");

const {
    updateProfileValidation,
} = require("./user.validation");

const router = express.Router();

router.get(
    "/me",
    authMiddleware,
    getMyProfile
);

router.patch(
    "/profile",
    authMiddleware,
    updateProfileValidation,
    updateMyProfile
);

module.exports = router;