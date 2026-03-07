const multer = require('multer');

// Use memory storage instead of disk storage
const storage = multer.memoryStorage();

function fileFilter(req, file, cb) {
  const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif','image/svg+xml', 'image/jpg', 'image/bmp', 'image/tiff', 'image/x-icon', 'image/heic', 'image/heif', 'image/avif', 'image/vnd.microsoft.icon', 'image/psd', 'image/ai', 'image/eps', 'image/fpx', 'image/indd', 'image/jp2', 'image/jpx', 'image/jpm', 'image/mrsid', 'image/sgi', 'image/svg+xml', 'image/tiff', 'image/webp'];

  if (!allowed.includes(file.mimetype)) {
    return cb(new Error('Only image files are allowed'), false);
  }

  cb(null, true);
}

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB
  }
});

module.exports = {
  upload
};