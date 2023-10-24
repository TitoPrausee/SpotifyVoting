// songController.js

const Song = require('../models/songModel');

exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createSong = async (req, res) => {
  try {
    const { title, artist } = req.body;
    const song = new Song({ title, artist });
    await song.save();
    res.status(201).json(song);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
};

exports.voteSong = async (req, res) => {
  try {
    const { id } = req.params;
    const song = await Song.findById(id);
    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }
    song.votes += 1;
    await song.save();
    res.json(song);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};