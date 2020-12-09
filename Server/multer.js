const multer = require('multer')
const fs = require('fs')

const filefunction = (req, file, cb) => {
  let filename = Math.random().toString(36).substring(2, 7);
  cb(null, filename + Date.now() + '-' + file.originalname.replace(/ /g, "_"))
}

var imagestorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/Image/')
  },
  filename: filefunction
})

var meshstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/Mesh/')
  },
  filename: filefunction
})

let upload = {
  'mesh': multer({ storage: meshstorage }).single('file'),
  'image': multer({ storage: imagestorage }).single('file')
}

const deleteFile = path => {
  fs.unlink(__dirname+'/public/' + path,err=>{
    if (err) console.log('filesync error on multer.js ',err)
    console.log('File deleted', path)
  })
}
module.exports = {upload, deleteFile}
