// we have to create one function that will update the role of educato.
// so that regular can become educator

import { clerkClient, getAuth } from "@clerk/express";

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