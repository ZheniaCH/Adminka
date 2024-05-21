const {
  sendAllCategories,
  sendCategoryById,
  sendCategoryCreated,
  sendCategorysUpdated,
  sendCategoriesDeleted,
} = require("../controllers/categories");
const checkAuth = require("../middlewares/auth");
const {
  findAllCategories,
  findCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  checkIsCategoryExists,
} = require("../middlewares/categories");
const { checkEmptyName } = require("../middlewares/users");

const categoriesRouter = require("express").Router();

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.put(
  "/categories/:id",
  findCategoryById,
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategorysUpdated
);
categoriesRouter.delete(
  "/categories/:id",
  checkAuth,
  deleteCategory,
  sendCategoriesDeleted
);

module.exports = categoriesRouter;
