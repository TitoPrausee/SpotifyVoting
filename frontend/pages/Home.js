// Home.js

import React, { useState, useEffect } from 'react';
import SongSearch from '../components/SongSearch';
import SongList from '../components/SongList';
import { getSongs, createSong, voteSong } from '../services/songService';

function Home() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    const response = await getSongs();
    setSongs(response.data);
  };

  const handleCreateSong = async (title, artist) => {
    await createSong(title, artist);
    fetchSongs();
  };

  const handleVoteSong = async (id) => {
    await voteSong(id);
    fetchSongs();
  };

  return (
    <div>
      <h1>Song List</h1>
      <SongSearch onCreateSong={handleCreateSong} />
      <SongList songs={songs} onVoteSong={handleVoteSong} />
    </div>
  );
}

export default Home;