import React from 'react'
import AudioPlayer from './Components/AudioPlayer/AudioPlayer'
import LyricsDisplay from './Components/LyricsDisplay/LyricsDisplay'
import SearchBar from './Components/SearchBar/SearchBar'

import './App.css'
const App = () => {
  const [lyrics, setLyrics] = React.useState('');
  const [songInfo, setSongInfo] = React.useState({ title: '', artist: '' });

  return (
    <>
      <div className='App'>
        <h1>Recat Lyrics Finder App!</h1>
        <SearchBar 
          setLyrics={setLyrics} 
          setSongInfo={setSongInfo}
        />
        <hr />
        <LyricsDisplay 
          lyrics={lyrics}
        />
        <hr />
        <AudioPlayer
          songInfo={songInfo}
        />
      </div>
    </>
  )
}

export default App
