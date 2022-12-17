const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const commentRoutes = require("./commentRoutes");
const blogRoutes = require("./blogRoutes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.use("/blog", blogRoutes);

module.exports = router;
