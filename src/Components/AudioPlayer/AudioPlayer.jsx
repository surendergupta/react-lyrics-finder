import React from 'react'

import './AudioPlayer.css'

const AudioPlayer = ({ songInfo }) => {
    const { title, artist } = songInfo;

    const searchQuery = (`${artist} ${title}`);
    const embedUrl = `https://www.youtube.com/embed?listType=search&list=${searchQuery}`;
  return (
    <div className='audio-player'>
      <h1>Listen Song: {title} by {artist}</h1>
        {title && artist ? (
            <iframe
            width="100%"
            height="100"
            src={embedUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Music Player"
            />
        ) : (
            <p>Search a song to play audio preview.</p>
        )}
    </div>
  )
}

export default AudioPlayer
