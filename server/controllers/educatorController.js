// we have to create one function that will update the role of educato.
// so that regular can become educator

import { clerkClient, getAuth } from "@clerk/express";
import Course from '../models/course.js'
import { v2 as cloudinary } from "cloudinary";

export const updateRoleToEducator = async (req, res) => {
  try {
    const { userId } = getAuth(req);

    console.log("User ID:", userId);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: "educator",
      },
    });

    return res.json({
      success: true,
      message: "You can publish a course now",
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Add new COURSE:

export const addCourse = async (req, res) => {
  try {
    const { courseData } = req.body
    const imageFile = req.File
    const educatorId = getAuth(req);
    if (!imageFile) {
      return res.json({ success: false, message: 'Thumbnail not attached' })

    }
    const parsedCourseData = await JSON.parse(courseData)
    parsedCourseData.educator = educatorId
    const newCourse = await Course.create(parsedCourseData)
    const imageUpload = await cloudinary.uploader.upload(imageFile.path)
    newCourse.courseThumbnail = imageUpload.secure_url
    await newCourse.save()

    res.json({ success: true, message: 'Course Added' })
  } catch (error) {
    res.json({ success: false, message: 'error.message' })


  }
}