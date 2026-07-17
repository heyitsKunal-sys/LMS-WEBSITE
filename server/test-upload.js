import dns from 'dns';
dns.setDefaultResultOrder('ipv4first');

import { v2 as cloudinary } from 'cloudinary';
import 'dotenv/config';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

cloudinary.uploader.upload('https://res.cloudinary.com/demo/image/upload/sample.jpg')
  .then(res => console.log('✅ Upload worked:', res.secure_url))
  .catch(err => console.log('❌ Full error:', JSON.stringify(err, null, 2)));