import React, { useState } from 'react';

const VideoModal = ({ videoSrc, toggleModal}) => {
  return (  
        <div className="modal-overlay" >
          <div className="modal-content">
            <button className="modal-close" onClick={toggleModal}>
              Close
            </button>
            <div className="video-container">
              <video controls>
                <source src={videoSrc} type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>  
  );
};

export default VideoModal;

