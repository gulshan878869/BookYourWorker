const Worker = require("../worker/worker.model");

const getPendingWorkers = async () => {
    const workers = await Worker.find({
        verificationStatus: "pending",
    })
        .populate("userId", "name email role")
        .sort({ createdAt: -1 });

    return workers;
};

const getWorkerById = async (workerId) => {
    const worker = await Worker.findById(workerId)
        .populate("userId", "name email role");

    if (!worker) {
        throw new Error("Worker not found");
    }

    return worker;
};

module.exports = {
    getPendingWorkers,
     getWorkerById,
};