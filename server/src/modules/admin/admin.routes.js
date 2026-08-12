const express = require("express");

const {
    getPendingWorkers,
    getWorkerById,
} = require("./admin.controller");

const authMiddleware = require("../../middleware/auth.middleware");
const adminMiddleware = require("../../middleware/admin.middleware");

const router = express.Router();

router.get(
    "/workers/pending",
    authMiddleware,
    adminMiddleware,
    getPendingWorkers
);

router.get(
    "/workers/:id",
    authMiddleware,
    adminMiddleware,
    getWorkerById
);

module.exports = router;