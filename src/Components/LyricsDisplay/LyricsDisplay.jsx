import React from 'react'

import './LyricsDisplay.css'

const LyricsDisplay = ({ lyrics }) => {
  return (
    <div className='lyrics'>
        <h2>Lyrics Shows</h2>
        <pre>{lyrics}</pre>
    </div>
  )
}

export default LyricsDisplay
