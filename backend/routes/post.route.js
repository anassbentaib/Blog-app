import express from "express";
import { create, getPosts } from "../controllers/post.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/get-posts", getPosts);

export default router;
