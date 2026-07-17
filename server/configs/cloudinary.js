import { v2 as cloudinary } from 'cloudinary'
import 'dotenv/config';

const connectCloudinary = async () => {
    cloudinary.config({

        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY

    });
    cloudinary.api.ping()
        .then(res => console.log('✅ Cloudinary connected:', res))
        .catch(err => console.log('❌ Cloudinary error:', err));
}

export default connectCloudinary;