import express from "express";
import {
  getProducts,
  getProductsbyId,
  deleteProduct,
  createProduct,
  updateProduct,
  createdProductReview,
} from "../controller/productController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router(); //router object from express if we use constructor function then it gives router object

router.route("/").get(getProducts).post(protect, admin, createProduct);
//all the product that are store in database that give you in the form of array
//find products and pass in object res.json will get data
// product is an object
//asynchandler is use for error handling it is middleware wrap our callbacks
//when we use empty object on method then it gives you all the value from array.product.find {everything}
router.route("/:id/reviews").post(protect, createdProductReview);

router
  .route("/:id")
  .get(getProductsbyId)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);
//ress.json we can use but we can also do chainig so we pass an message to 404 error.

export default router;
