const userService = require("./user.service");

const getMyProfile = async (req, res) => {
    try {
        const userId = req.user.userId;

        const result = await userService.getMyProfile(userId);

        return res.status(200).json({
            success: true,
            message: "Profile fetched successfully",
            data: result,
        });
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: error.message,
        });
    }
};

const updateMyProfile = async (req, res) => {
    try {
        const userId = req.user.userId;

        const result = await userService.updateMyProfile(
            userId,
            req.body
        );

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            data: result,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    getMyProfile,
    updateMyProfile,
};