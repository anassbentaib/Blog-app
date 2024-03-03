import express from "express";
import { create, getPosts ,deletePost} from "../controllers/post.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/get-posts", getPosts);
router.delete("/delete-post/:postId/:userId", verifyToken, deletePost);

export default router;
