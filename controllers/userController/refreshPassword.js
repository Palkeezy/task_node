module.exports = async (req, res) => {
    try {
        const {token} = req.params;

        res.status(200).json({
            token
        });
    } catch (e) {
        res.status(e.status).json({
            message: e.message,
            controller: e.controller
        })
    }
};


