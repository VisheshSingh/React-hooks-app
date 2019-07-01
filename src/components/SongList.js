import React, { useState } from 'react';
import uuid from 'uuid';
import NewSong from './NewSong';

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

  const addSong = title => {
    setSong([...songs, { title: title, id: uuid.v4() }]);
  };

  return (
    <div className="song-list">
      {songs.map(song => (
        <li key={song.id}>{song.title}</li>
      ))}
      <NewSong addSong={addSong} />
    </div>
  );
}

export default SongList;
