const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Auth",
            required: true,
            unique: true,
        },

        phone: {
            type: String,
            trim: true,
        },

        address: {
            type: String,
            trim: true,
        },

        profileImage: {
            type: String,
            default: null,
        },

        bio: {
            type: String,
            trim: true,
            maxlength: 500,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;