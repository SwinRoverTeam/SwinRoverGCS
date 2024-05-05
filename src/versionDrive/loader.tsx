import icon from '../../assets/SRT.png';
import './loader.css';
import '@fontsource/inter';
import LinearProgress from '@mui/joy/LinearProgress';
import CircularProgress from '@mui/joy/CircularProgress';
import { createRoot } from 'react-dom/client';
import React, { useEffect, useState } from 'react';
import Typography from '@mui/joy/Typography';

//src={icon}
// calling IPC exposed from preload script


window.electronLoader.ipcRenderer.once('data', (arg) => {
  //Set the Msg to the UI for the user to see
  console.log(arg);
});

//window.electronLoader.ipcRenderer.sendMessage('data', ['pingBalls']);
/**
 * <div className="Loader">
      <LinearProgress variant='plain' color="danger" determinate value={progress}/>
      </div>
 * */
function Loading() {
  const progress = 50;
  const [message, setMessage] = useState('Starting Version Drive'); // Initialize state 
  const [number, setNumber] = useState(25);
  useEffect(() => {
    window.electronLoader.ipcRenderer.on('data', (arg) => {
      if (Array.isArray(arg) && arg.length > 0) {
        if (arg[0] === 'dProgress') {
          setNumber(arg[1]);
        } else{
          setMessage(arg[0]);
        }
      }
    });
  }, []);
  return (
    <div>
      <div className="Loader">
        <img width="200" alt="icon" src={icon} />
      </div>
      <div className="Loader">
      <CircularProgress variant='plain' color="danger" value={number}/>
      </div>
      <div className="Loader">
        <Typography  color="danger" align="center">
          {message}
        </Typography>
      </div>
    </div>
  );
}

function App() {
  return (
    <Loading />
      
  );
}

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);