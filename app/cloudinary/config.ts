import { Cloudinary } from '@cloudinary/url-gen';

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

if (!cloudName) {
  throw new Error(
    'NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not set. Please create a .env.local file with your Cloudinary cloud name.\n' +
    'See .env.example for reference.'
  );
}

export const cld = new Cloudinary({
  cloud: {
    cloudName: cloudName,
  },
});

export const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || '';
