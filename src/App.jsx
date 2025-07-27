import React from 'react'
import AudioPlayer from './Components/AudioPlayer/AudioPlayer'
import LyricsDisplay from './Components/LyricsDisplay/LyricsDisplay'
import SearchBar from './Components/SearchBar/SearchBar'

import './App.css'
const App = () => {

  return (
    <>
      <div className='App'>
        <h1>Recat Lyrics Finder App!</h1>
        <SearchBar />
        <hr />
        <LyricsDisplay />
        <hr />
        <AudioPlayer />
      </div>
    </>
  )
}

export default App
