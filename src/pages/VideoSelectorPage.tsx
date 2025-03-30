import React from "react";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../routes";

const VideoSelectorPage: React.FC = () => {
  const { setVideoFile } = useAppContext();
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setVideoFile(file);
      navigate(RouteNames.VIDEO_PLAYER);
    }
  };

  return (
    <div>
      <h2>Select a Video</h2>
      <input
        title="select video"
        type="file"
        accept="video/*"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default VideoSelectorPage;
