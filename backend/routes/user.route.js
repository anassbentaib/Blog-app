import express from "express";
import {
  test,
  updateUser,
  getUsers,
  deleteUser,
  getUser,
  signOut,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);

router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signOut);
router.get("/get-users", verifyToken, getUsers);
router.get("/:userId", verifyToken, getUser);

export default router;
