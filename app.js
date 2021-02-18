const projectId = '<project-id>'

// Key file
const keyFilename = 'key.json'

const bucketName = '<project-id>.appspot.com';
const srcFilename = 'image.jpg';
var downloadUrl;

// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// Creates a client
const storage = new Storage({projectId, keyFilename});

async function url() {

  // Get the download url of the file
  downloadUrl = await storage.bucket(bucketName).file(srcFilename).getSignedUrl({
    action: 'read',
    expires: '03-09-2490' // Url expiry time
  });

  console.log(`Download url: ` + downloadUrl);
}

url().catch(console.error);
