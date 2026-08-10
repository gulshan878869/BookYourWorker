const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Auth = require("./auth.model");

const registerUser = async ({ name, email, password, role }) => {
    const existingUser = await Auth.findOne({ email });

    if (existingUser) {
        throw new Error("User with this email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Auth.create({
        name,
        email,
        password: hashedPassword,
        role: role || "customer",
    });

    const token = jwt.sign(
        {
            userId: user._id,
            role: user.role,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d",
        }
    );

    return {
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
        token,
    };
};

const loginUser = async ({ email, password }) => {
    console.log("LOGIN EMAIL:", email);
    console.log("LOGIN PASSWORD:", password);

    const user = await Auth.findOne({ email });

    console.log("USER FOUND:", user);

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isPasswordMatch = await bcrypt.compare(
        password,
        user.password
    );

    console.log("PASSWORD MATCH:", isPasswordMatch);

    if (!isPasswordMatch) {
        throw new Error("Invalid email or password");
    }

    const token = jwt.sign(
        {
            userId: user._id,
            role: user.role,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d",
        }
    );

    return {
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
        token,
    };
};

module.exports = {
    registerUser,
    loginUser,
};