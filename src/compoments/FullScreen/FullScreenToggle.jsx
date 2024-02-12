import React, { useState } from 'react';
import { Button, Typography, Container, IconButton } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

const FullScreenToggle = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreenToggle = () => {
    if (!isFullScreen) {
      openFullscreen();
    } else {
      closeFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  const openFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  };

  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  return (
    <>

      <Button fullWidth sx={{textTransform: 'capitalize'}} onClick={handleFullScreenToggle} variant="outlined" startIcon={isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}>
        {isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}
      </Button>
    </>
  );
};

export default FullScreenToggle;

