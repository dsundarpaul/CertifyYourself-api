import express from "express";

import { signin } from "../controllers/user";

const router = express.Router();

router.post('/auth/login', signin);
// router.post('/signup', signup);

export default router;