import { clerkClient, getAuth } from "@clerk/express";

// middleware (Protect  educator routes)

export const protectEducator = async (req, res, next) => {
    try {
        const { userId } = getAuth(req);
        console.log("middleware reached")
        console.log("user id:", userId)

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated"
            });
        }

        const response = await clerkClient.users.getUser(userId);
        console.log("public metadata :", response.publicMetadata)
        console.log("role :", response.publicMetadata.role)

        if (response.publicMetadata.role !== "educator") {
            return res.status(403).json({
                success: false,
                message: "Unauthorized Access",
            });
            
        }

        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};