import express from "express";
import { isAdmin,requireSignIn } from "../middleware/authMiddleware.js";

import { CreateCategoryController,updateCategoryController,categoryControlller,singleCategoryController,deleteCategoryController} from "../controllers/catliController.js";

const router = express.Router()



//routes
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  CreateCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//getALl category
router.get("/get-category", categoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
 
);
export default router ;