import express from "express"
const router=express.Router();

import handleNewUsers from "../controllers/registerController.mjs"

router.post("/",handleNewUsers)
export default router;