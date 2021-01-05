const UserModel = require("../../model/user-model");

// @desc POST new user
// @route GET /api/v1/user
exports.createUser = async (req, res, next) => {
    try {
        const user = await UserModel.create(req.body);
        
        res.status(201).json({ success: true, data: user});
    } catch (error) {
        next(error);
    }
}
