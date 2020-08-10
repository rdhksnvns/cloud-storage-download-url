const projectId = 'ecell-5b937'

// Key file
const keyFilename = 'key.json'

const bucketName = 'ecell-5b937.appspot.com';
const srcFilename = 'certificate_template.jpg';
var downloadUrl;

// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// Creates a client
const storage = new Storage({projectId, keyFilename});

async function url() {

  // Get the download url of the file
  downloadUrl = await storage.bucket(bucketName).file(srcFilename).getSignedUrl({
    action: 'read',
    expires: '03-09-2491'
  });

  console.log(`Download url: ` + downloadUrl);
}

url().catch(console.error);