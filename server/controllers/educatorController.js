// we have to create one function that will update the role of educato.
// so that regular can become educator

import { clerkClient } from '@clerk/express'
import { response } from 'express'


export const updateRoleToEducator = async () => {
    try {
        const userId = req.auth.userId

        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                role: ' educator',
            }
        })
        res.json({ sucess: true, message: "You have publish your course now" })
    } catch (error) {
        res.json({ sucess: false, meassage: error.message })

    }
}