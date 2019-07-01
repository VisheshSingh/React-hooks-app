import React, { useState } from 'react';
import uuid from 'uuid';

function SongList() {
  const [songs, setSong] = useState([
    {
      title: 'Almost home',
      id: 1
    },
    {
      title: 'Memory gospel',
      id: 2
    },
    {
      title: 'This wild darkness',
      id: 3
    }
  ]);

  const addSong = () => {
    setSong([...songs, { title: 'All of me', id: uuid.v4() }]);
  };

  return (
    <div className="song-list">
      {songs.map(song => (
        <li key={song.id}>{song.title}</li>
      ))}
      <button onClick={addSong}>Add a song</button>
    </div>
  );
}

export default SongList;
