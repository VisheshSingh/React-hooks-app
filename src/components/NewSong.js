import React, { useState } from 'react';

const NewSong = ({ addSong }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>New Song:</label>
      <input
        type="text"
        value={title}
        required
        onChange={e => setTitle(e.target.value)}
      />
      <input type="submit" value="Add Song" />
    </form>
  );
};

export default NewSong;
