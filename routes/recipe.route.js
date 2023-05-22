const commentController = require("../controllers/comment.controller");
const recipeController = require("../controllers/recipe.controller");
const recipeService = require("../services/recipe.service");
const recipeRoute = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const uuid = require("uuid");
const paginationMiddleware = require("../middlewares/pagination.middleware");
const bodyValidator = require("../middlewares/validator");
const {createRecipeValidator, updateRecipeCoverValidator} = require("../validators/recipe.validator");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/recipe");
  },
  filename: (req, file, cb) => {
    // const name = uuid.v4();
    const name = uuid.v4();
    const ext = file.originalname.split(".").at(-1);
    // console.log(ext);

    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

recipeRoute
  .route("/")
  .get(paginationMiddleware(3), recipeController.getAllPaginated)
  .post(bodyValidator(createRecipeValidator) ,recipeController.create);

recipeRoute.route("/react").post(recipeController.react);

recipeRoute.route("/react/:id").get(recipeController.getByReact);

recipeRoute
  .route("/comment")
  .get(commentController.getAll)
  .post(commentController.post)
  .delete(recipeController.deleteComment);

recipeRoute.route("/search").get(recipeController.Count);

recipeRoute.route("/top")
  .get(recipeController.getTopRecipe);
  
recipeRoute
  .route("/:id")
  .get(recipeController.getById)
  .put(recipeController.update)
  .delete(recipeController.delete);

recipeRoute
  .route("/comment/:id")
  .get(commentController.getById)
  .put(commentController.edit)
  .delete(commentController.delete);


recipeRoute
  .route("/:id/updateimage")
  .patch(bodyValidator(updateRecipeCoverValidator) ,upload.single("image"), recipeController.updateImage);

module.exports = recipeRoute;
