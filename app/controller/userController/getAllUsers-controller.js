const UserModel = require("../../model/user-model");

// @desc Get all users
// @route GET /api/v1/user
exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json({ success: true, data: users});
    } catch (error) {
        res.status(404).json({ success: false, error: error});
    }
}
