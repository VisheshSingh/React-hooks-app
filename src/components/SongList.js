import React, { useState, useEffect } from 'react';
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

  const [age, setAge] = useState(20);

  const addSong = title => {
    setSong([...songs, { title: title, id: uuid.v4() }]);
  };

  useEffect(() => {
    console.log('useEffect hook for songs ran ', songs);
  }, [songs]);

  useEffect(() => {
    console.log('useEffect hook for age ran ', age);
  }, [age]);

  return (
    <div className="song-list">
      {songs.map(song => (
        <li key={song.id}>{song.title}</li>
      ))}
      <NewSong addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
}

export default SongList;
