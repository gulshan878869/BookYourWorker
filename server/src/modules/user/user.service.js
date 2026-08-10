const User = require("./user.model");
const Auth = require("../auth/auth.model");

const getMyProfile = async (userId) => {
    const authUser = await Auth.findById(userId).select(
        "-password"
    );

    if (!authUser) {
        throw new Error("User not found");
    }

    const profile = await User.findOne({ userId });

    return {
        auth: {
            id: authUser._id,
            name: authUser.name,
            email: authUser.email,
            role: authUser.role,
        },
        profile: profile || null,
    };
};
const updateMyProfile = async (userId, profileData) => {
    const { phone, address, bio, profileImage } = profileData;

    const profile = await User.findOneAndUpdate(
        { userId },
        {
            phone,
            address,
            bio,
            profileImage,
        },
        {
            new: true,
            upsert: true,
            runValidators: true,
        }
    );

    return profile;
};

module.exports = {
    getMyProfile,
    updateMyProfile,
};