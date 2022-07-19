const multer = require('multer')


const fileStorage = multer.diskStorage({
    destination: (request,
        file,
        callback) => {
        const uploadFolder = './public'
        callback(null, uploadFolder)
    },
    filename: (req,
        file,
        callback) => {
        callback(null, `/post-images/${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({
    storage: fileStorage
})

module.exports = upload
