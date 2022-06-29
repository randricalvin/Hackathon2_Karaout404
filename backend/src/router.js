const express = require("express");

const {
  UserController,
  ProjectController,
  UserProjectController,
  LikeProjectController,
} = require("./controllers");

const router = express.Router();

// ROUTES USER

router.get("/users", UserController.browse);
router.get("/users/:id", UserController.read);
router.post("/users", UserController.add);
router.delete("/users/:id", UserController.delete);

// ROUTES PROJECT

router.get("/projects", ProjectController.browse);
router.get("/projects/:id", ProjectController.read);
router.post("/projects", ProjectController.add);
router.delete("/projects/:id", ProjectController.delete);

// ROUTES to add, delete or update a user to a project

router.post("/userhasproject", UserProjectController.add);

// ROUTES to like a project
router.get("/likeproject", LikeProjectController.browse);
router.post("/likeproject", LikeProjectController.add);

module.exports = router;
