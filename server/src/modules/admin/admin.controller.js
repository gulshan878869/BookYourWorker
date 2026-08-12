const adminService = require("./admin.service");

const getPendingWorkers = async (req, res) => {
    try {
        const workers = await adminService.getPendingWorkers();

        return res.status(200).json({
            success: true,
            message: "Pending workers fetched successfully",
            data: workers,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getWorkerById = async (req, res) => {
    try {
        const worker = await adminService.getWorkerById(
            req.params.id
        );

        return res.status(200).json({
            success: true,
            message: "Worker details fetched successfully",
            data: worker,
        });
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    getPendingWorkers,
    getWorkerById,
};