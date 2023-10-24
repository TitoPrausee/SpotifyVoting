// songRoutes.js

const express = require('express');
const songController = require('../controllers/songController');

const router = express.Router();

router.get('/', songController.getAllSongs);
router.post('/', songController.createSong);
router.put('/:id/vote', songController.voteSong);

module.exports = router;