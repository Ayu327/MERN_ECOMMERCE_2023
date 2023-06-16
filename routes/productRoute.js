import express from 'express'
import {isAdmin,requireSignIn} from '../middleware/authMiddleware.js'
import { createProductController ,getProductController,getSingleProductController,productPhotoController,deleteProductController,updateProductController, productFiltersController, productCountController, productListController, searchProductController, realtedProductController, productCategoryController, braintreeTokenController, brainTreePaymentController} from '../controllers/productController.js'
import formidable from 'express-formidable'

const router = express.Router()


router.post("/create-product", requireSignIn, isAdmin, formidable(), createProductController);

router.get("/get-product", getProductController);

router.get("/get-product/:slug", getSingleProductController);

router.get("/product-photo/:pid", productPhotoController);

router.delete("/delete-product/:pid", deleteProductController);

router.put("/update-product/:pid", requireSignIn, isAdmin, formidable(), updateProductController);

// Exclude authentication for product count and product filters
router.post("/product-filters", productFiltersController);

router.get("/product-count", productCountController);

// product per page
router.get("/product-list/:page", productListController);

//search controller
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router ;