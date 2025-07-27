import React from 'react'
import axios from 'axios';

import './SearchBar.css'

const SearchBar = ({ setLyrics, setSongInfo }) => {
    const [artist, setArtist] = React.useState('');
    const [title, setTitle] = React.useState('');
    const handleFetchLyrics = async () => {
        try {
            if (!artist || !title) {
                return;
            }
            const apiArtist = encodeURIComponent(artist.trim());
            const apiTitle = encodeURIComponent(title.trim());
            const { data } = await axios.get(`https://api.lyrics.ovh/v1/${apiArtist}/${apiTitle}`);
            console.log(data);
            setLyrics(data.lyrics);
            setSongInfo({ title, artist });
        } catch (error) {
            console.log(error);
            setLyrics("Lyrics not found.");
            setSongInfo({ title: '', artist: '' });
        }
    }

  return (
    <div className="search-bar">
      <input 
        type="text"  
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Song Name"        
      />
      <input 
        type="text" 
        value={artist} 
        onChange={(e) => setArtist(e.target.value)} 
        placeholder="Artist Name"
      />
      <button onClick={() => handleFetchLyrics()} >Search</button>
    </div>
  )
}

export default SearchBar
