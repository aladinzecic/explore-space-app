import React from "react";
import ReactPlayer from "react-player";
import "./Home.css";
const videoUrl =
  "https://res.cloudinary.com/dp7iyoyad/video/upload/v1686872191/video_am6ks4.mp4";

export default function Home() {
  return (
    <div className="video-container">
      <ReactPlayer
        playing={true}
        url={videoUrl}
        controls={false}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
      />
      <div className="text-overlay">
        <h2 className="mars-title">Explore space with us!</h2>
      </div>
    </div>
  );
}
