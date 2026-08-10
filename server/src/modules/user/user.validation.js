const { body } = require("express-validator");

const updateProfileValidation = [
    body("phone")
        .optional()
        .trim()
        .isMobilePhone("any")
        .withMessage("Please enter a valid phone number"),

    body("address")
        .optional()
        .trim()
        .isLength({ max: 300 })
        .withMessage("Address cannot exceed 300 characters"),

    body("bio")
        .optional()
        .trim()
        .isLength({ max: 500 })
        .withMessage("Bio cannot exceed 500 characters"),
];

module.exports = {
    updateProfileValidation,
};