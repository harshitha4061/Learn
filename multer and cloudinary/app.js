const express = require("express");
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const path=require('path')
require(dotenv).config()

cloudinary.config({
    cloud_name: 'YOUR_CLOUD_NAME', //process.env.CLOUDNAME
    api_key: 'YOUR_API_KEY',
    api_secret: 'YOUR_API_SECRET'
  });
  

// const upload = multer({ dest: 'uploads/' })  for local storage

// const storage = multer.memoryStorage()
// const upload = multer({ storage: storage })
// for buffer storage

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images')
        //null what to return if error
        //./images is folder name to store 
        //remeber to create folder before it doesnot create defautly
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
        //we are try to give unique filename with help of date
    }
})
const upload = multer({ storage: storage })


// options in muter are storage,preserve path,filefilter,limits


// Multer setup
// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter,
//   preservePath: true, // Optional: preserve the original file path (somewhat useful with memoryStorage)
//   limits: {
//     fileSize: 2 * 1024 * 1024, // 2MB max file size
//     files: 1,
//     fields: 10,
//     fieldSize: 1024 * 1024,
//     fieldNameSize: 100,
//     parts: 20,
//     headerPairs: 2000
//   }
// });


// LIMITS
// Key	Description	Default
// fieldNameSize	Max field name size	100 bytes
// fieldSize	Max field value size (in bytes)	1MB
// fields	Max number of non-file fields	Infinity
// fileSize	For multipart forms, the max file size (in bytes)	Infinity
// files	For multipart forms, the max number of file fields	Infinity
// parts	For multipart forms, the max number of parts (fields + files)	Infinity
// headerPairs	For multipart forms, the max number of header key=>value pairs to parse	2000


// Filefilter 
// function fileFilter (req, file, cb) {
//     cb(null, false)
//     cb(null, true)
//   }

const app = express();
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    res.render('form')
})

//File Information
// fieldname - Field name specified in the form	
// originalname	 - Name of the file on the user's computer	
// encoding - 	Encoding type of the file	
// mimetype	 - Mime type of the file	
// size	 - Size of the file in bytes	
// destination - The folder to which the file has been saved	DiskStorage
// filename - 	The name of the file within the destination	DiskStorage
// path	 - The full path to the uploaded file	DiskStorage
// buffer - A Buffer of the entire file	MemoryStorage

// upload.array('photos', 12)
// req.files is array of `photos` files

// upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
// req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
// e.g.
// req.files['avatar'][0] -> File
// req.files['gallery'] -> Array

// upload.none()
// .any()
// Accepts all files that comes over the wire. An array of files will be stored in req.files.

app.post("/form", upload.single('File'), (req, res) => {
    // req.file is the `avatar` file

    const result = cloudinary.uploader.upload(req.file.filename, {
        folder: 'LostAndFound',
        use_filename: true,
        unique_filename: false,
        overwrite: true,
        resource_type: 'image',
    })
    res.send(result)
    //output:
    // {
    //     asset_id: "abcd1234efgh5678ijkl",
    //     public_id: "LostAndFound/my_uploaded_image",
    //     version: 1712431234,
    //     version_id: "123abc456def789ghi",
    //     signature: "abcdef1234567890",
    //     width: 800,
    //     height: 600,
    //     format: "jpg",
    //     resource_type: "image",
    //     created_at: "2025-04-06T12:34:56Z",
    //     tags: [],
    //     bytes: 345678,
    //     type: "upload",
    //     etag: "abcdef1234567890",
    //     placeholder: false,
    //     url: "http://res.cloudinary.com/your_cloud_name/image/upload/v1712431234/LostAndFound/my_uploaded_image.jpg",
    //     secure_url: "https://res.cloudinary.com/your_cloud_name/image/upload/v1712431234/LostAndFound/my_uploaded_image.jpg",
    //     original_filename: "my_uploaded_image"
    //   }

    //secure_url is used to access image in web (for https and url for http)
    //whereas public_id is used to delete ,update,tranform the image like object id in mongodb

    // cloudinary.uploader.destroy(public_id)
    //this deletes the image
})


app.listen(3000, () => {
    console.log("listening to port 3000")
})