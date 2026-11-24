const express = require("express");
const router = express.Router();

const komikController = require("../controllers/komikController");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", userController.register);
router.post("/login", userController.login);

router.get("/Komik", komikController.getAllKomik);
router.get("/Komik/:id", komikController.getKomikById);

router.post("/Komik", authMiddleware, komikController.createKomik);
router.put("/Komik/:id", authMiddleware, komikController.updateKomik);
router.delete("/Komik/:id", authMiddleware, komikController.deleteKomik);

module.exports = router;