import React from 'react'
import axios from 'axios';

import './SearchBar.css'

const SearchBar = ({ setLyrics, setSongInfo }) => {
    const [artist, setArtist] = React.useState('');
    const [song, setSong] = React.useState('');
    // const handleFetchLyrics = async () => {
    //     try {
    //         if (!artist || !song) {
    //             return;
    //         }
    //         const apiArtist = encodeURIComponent(artist.trim());
    //         const apiTitle = encodeURIComponent(song.trim());
    //         const { res } = await axios.get(`http://localhost:5000/api/lyrics?artist=${apiArtist}&title=${apiTitle}`);
    //         const data = res.data;
    //         console.log(data);
    //         setLyrics(data.lyrics);
    //         setSongInfo({ song, artist });
    //     } catch (error) {
    //         console.log(error);
    //         setLyrics("Lyrics not found.");
    //         setSongInfo({ song: '', artist: '' });
    //     }
    // }
    const searchLyrics = async() => {
        try {
            if (!artist || !song) return;
            const res = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`);
            setLyrics(res.data.lyrics);
            setSongInfo({ song, artist });
        } catch (error) {
            console.error("Error fetching lyrics:", error.message);
            setLyrics("Lyrics not found.");
            setSongInfo({ song: '', artist: '' });
        }
    }

  return (
    <div className="search-bar">
        <input 
            type="text" 
            value={artist} 
            onChange={(e) => setArtist(e.target.value)} 
            placeholder="Artist Name"
        />
        <input 
            type="text"  
            value={song} 
            onChange={(e) => setSong(e.target.value)} 
            placeholder="Song Name"        
        />
        <button onClick={() => searchLyrics()} >Search</button>
    </div>
  )
}

export default SearchBar
