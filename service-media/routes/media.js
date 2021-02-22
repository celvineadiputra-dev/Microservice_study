const express = require('express');
const router = express.Router();
const isBase64 = require('is-base64');
const base64Img = require('base64-img');
const {
  Media
} = require('../models');
const fs = require('fs');

router.post('/', (req, res) => {
  const image = req.body.image;
  if (!isBase64(image, {
      mimeRequired: true
    })) {
    return res.status(400).json({
      status: 'error',
      message: "invalid base64"
    });
  }
  base64Img.img(image, './public/images/', Date.now(), async (err, filepath) => {
    if (err) {
      return res.status(400).json({
        status: 'error',
        message: err.message
      });
    }

    const fileName = filepath.split("\\").pop().split("/").pop();

    const media = await Media.create({
      image: `images/${fileName}`
    });

    return res.status(200).json({
      status: "success",
      data: {
        id: media.id,
        image: `${req.get('host')}/images/${fileName}`
      }
    });

  });
});


router.get('/', async (req, res) => {
  //just get field id and image
  const media = await Media.findAll({
    attributes: ['id', 'image']
  });

  /*get all field
  const media = await Media.findAll();*/

  //add attribute Image url with host url
  const mediaToUrl = media.map(item => {
    item.image = `${req.get('host')}/${item.image}`;
    return item;
  });

  return res.status(200).json({
    status: "Success",
    data: mediaToUrl
  })
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  const media = await Media.findByPk(id);

  if (!media) {
    return res.status(404).json({
      status: "error",
      message: `Media with ${id} not found`
    });
  }

  fs.unlink(`./public/${media.image}`, async (err) => {
    if (err) {
      return res.status(200).json({
        status: "error",
        message: err.message
      });
    }

    await media.destroy();

    return res.status(200).json({
      status: "success",
      message: "Image deleted"
    });
  });
});

module.exports = router;