import { Webhook } from "svix";
import User from "../models/User.js";

// API controller function to manage Clerk User with Database

export const clerkWebhooks = async (req, res) => {
    try {
        // Verify webhook
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"], // Fixed
        });

        const { data, type } = req.body;

        switch (type) {

            case "user.created": {

                const userData = {
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
                    imageUrl: data.image_url,
                };

                console.log("Creating User:", userData);

                const user = await User.create(userData);

                console.log("User Created Successfully:", user);

                return res.status(200).json({
                    success: true,
                    message: "User created successfully",
                });
            }

            case "user.updated": {

                const userData = {
                    email: data.email_addresses[0].email_address, // Fixed
                    name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
                    imageUrl: data.image_url,
                };

                console.log("Updating User:", userData);

                await User.findByIdAndUpdate(data.id, userData);

                return res.status(200).json({
                    success: true,
                    message: "User updated successfully",
                });
            }

            case "user.deleted": {

                console.log("Deleting User:", data.id);

                await User.findByIdAndDelete(data.id);

                return res.status(200).json({
                    success: true,
                    message: "User deleted successfully",
                });
            }

            default:
                return res.status(200).json({
                    success: true,
                    message: "Event ignored",
                });
        }

    } catch (error) {

        console.error("Webhook Error:");
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};