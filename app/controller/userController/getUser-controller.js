const UserModel = require("../../model/user-model");
const ErrorResponse = require("../../utils/errorResponse");

// @desc Get selected user
// @route GET /api/v1/user/:id
exports.getUser = async (req, res, next) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return next(
                new ErrorResponse(`User not found for id of ${req.params.id}`, 404)
            );
        }

        return res.status(200).json({ success: true, data: user});
    } catch (error) {
        next(error);
    }
}