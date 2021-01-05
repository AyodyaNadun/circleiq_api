const UserModel = require("../../model/user-model");

// @desc delete selected user
// @route DELETE /api/v1/user/:id
exports.deleteUser = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, error: error});
        }

        res.status(200).json({ success: true, data: user});        
    } catch (error) {
        res.status(404).json({ success: false, error: error});
    }
}
