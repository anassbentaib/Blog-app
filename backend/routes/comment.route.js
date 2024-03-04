import express from "express";
import {
  createComment,
  likeComment,
  getPostComments,
} from "../controllers/comment.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getPostComments/:postId", verifyToken, getPostComments);
router.put("/likeComment/:commentId", verifyToken, likeComment);

export default router;
