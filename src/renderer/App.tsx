import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import '@fontsource/inter';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/Content';


function Pilot() {
  return (
    <CssVarsProvider defaultMode='dark'>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Sidebar />
        <Header />
        <Box
          component="main"
          className="MainContent"
          sx={{
            pt: { xs: 0, md: 0 },
            pb: { xs: 0, sm: 0, md: 0 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
          }}
        >
          <MainContent viewType= 'pilot'/>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
function Engineer() {
  return (
    <CssVarsProvider defaultMode='dark'>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Sidebar />
        <Header />
        <Box
          component="main"
          className="MainContent"
          sx={{
            pt: { xs: 0, md: 0 },
            pb: { xs: 0, sm: 0, md: 0 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
          }}
        >
          <MainContent viewType= 'systems'/>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
function Payloads() {
  return (
    <CssVarsProvider defaultMode='dark'>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Sidebar />
        <Header />
        <Box
          component="main"
          className="MainContent"
          sx={{
            pt: { xs: 0, md: 0 },
            pb: { xs: 0, sm: 0, md: 0 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
          }}
        >
          <MainContent viewType= 'payloads' />
        </Box>
      </Box>
    </CssVarsProvider>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pilot />} />
        <Route path="/systems" element={<Engineer />} />
        <Route path="/payloads" element={<Payloads />} />
      </Routes>
    </Router>
  );
}