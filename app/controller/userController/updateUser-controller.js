const UserModel = require("../../model/user-model");

// @desc update selected user
// @route PUT /api/v1/user/:id
exports.updateUser = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if (!user) {
            return res.status(404).json({ success: false, error: error});
        }

        res.status(200).json({ success: true, data: user});
    } catch (error) {
        res.status(404).json({ success: false, error: error});
    }
}
