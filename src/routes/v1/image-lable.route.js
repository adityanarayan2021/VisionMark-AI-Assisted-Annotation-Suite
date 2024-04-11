const express = require('express');
const auth = require('../../middlewares/auth');
const imageController = require('../../controllers/image-lable.controller');
const multer = require('multer');
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const getImageController = require('../../controllers/get.image.controller');


router
  .route('/')
  .post(auth('user'), upload.single('image'), imageController.imageLabeling)
  .get(imageController.exportDataInCsv);

  router
  .route('/:status')
  .get(auth('getUsers'),getImageController.getAllImagesByStatus)

  router
  .route('/:imageId')
  .put(auth('getUsers'), imageController.updateImageStatus)

  router
  .route('/export/csv')
  .get(auth('getUsers'), imageController.exportDataInCsv)



module.exports = router;