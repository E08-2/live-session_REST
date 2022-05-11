import express from "express";
import { getUserData } from "../controllers/usersController.js"

const router = express.Router();

// GET /users
router.get("/", fakeController) // ==> fakeController would return the full list of users in the response

// GET /user/1234
router.get("/:id", getUserData);   // GET relevant data about the user object and send it back in the response

export default router;