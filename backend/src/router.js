const express = require("express");

const {
  UserController,
  ProjectController,
  UserProjectController,
  LikeProjectController,
  AgenceController,
  NewController,
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
// ROUTES AGENCE

router.get("/agences", AgenceController.browse);
router.get("/agences/:id", AgenceController.read);
router.post("/agences", AgenceController.add);
router.delete("/agences/:id", AgenceController.delete);

// ROUTES NEW

router.get("/news", NewController.browse);
router.get("/news/:id", NewController.read);
router.post("/news", NewController.add);
router.delete("/news/:id", NewController.delete);

module.exports = router;
