import { Router } from "express";
import {
  loginController,
  logoutController,
  meController,
  registerController,
} from "@/controller/auth.controller";
import auth from "@/middleware/auth";

// auth/* routes
const router = Router();

router.post("/login", loginController);
router.delete("/logout", auth, logoutController);
router.get("/me", auth, meController);
router.post("/register", registerController);

export default router;
