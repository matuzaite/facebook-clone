import React from 'react';
import './Widgets.css';

function Widgets() {
  return (
    <div className='widgets'>
      <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/796417335&color=%236590a6&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        width='300'
        height='100%'
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling='none'
        frameBorder='0'>
      </iframe>
    </div>
  )
}

export default Widgets
