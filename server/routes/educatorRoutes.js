import express from 'express'
import { addCourse, updateRoleToEducator } from '../controllers/educatorController.js'
import { requireAuth } from '@clerk/express'
import { protectEducator } from '../middlewares/authMiddleware.js'

import upload from '../configs/multer.js'


const educatorRouter = express.Router()


// add educator role
educatorRouter.get('/update-role', requireAuth(), updateRoleToEducator)
educatorRouter.post(
    "/add-course",
    
    protectEducator,
    upload.single("image"),
    addCourse
);
export default educatorRouter;