const router = require('express').Router();
const productController = require('../controllers/productController');

router.post("/");
router.get("/", productController.product_all);
router.get("/:productId", productController.product_details);
router.put("/:productId");
router.delete("/:productId");

module.exports = router;
