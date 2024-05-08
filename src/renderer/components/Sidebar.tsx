import * as React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { Link } from 'react-router-dom';
import SRT from '../../../assets/SRT2.png';
import Drawer from '@mui/joy/Drawer';
import Setting from './Setting';
import ColorSchemeToggle from './colortoggle';
import IconButton from '@mui/joy/IconButton';
import BrightnessAutoRoundedIcon from '@mui/icons-material/BrightnessAutoRounded';


export default function Sidebar() {
  const [open, setOpen] = React.useState(false); // Add this line

  const toggleSettings = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => { // Add this function
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  const list = () => ( // Add this function
    <Box
      sx={{ width: 250, 
        zIndex: 9999,
       position: 'relative',}}
      
    >
     <Setting />
    </Box>
  );
  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: 'fixed', md: 'sticky' },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        transition: 'transform 0.4s, width 0.4s',
        zIndex: 1000,
        height: '100dvh',
        width: 'var(--Sidebar-width)',
        top: 0,
        p: 1,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Sidebar-width': '100px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '135px',
            },
          },
        })}
      />
      <Box sx={{ display: 'flex', gap: 0, alignItems: 'center' }}>
      <img src={SRT} alt="My Image" style={{ width: '100px', height: '100px' }} /> 
      </Box>
      
      <Box
        sx={{
          minHeight: 0,
          overflow: 'hidden auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            '--List-nestedInsetStart': '30px',
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
          }}
        >
          <ListItem>
          <Link to="/">
            <ListItemButton>
              <HomeRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Pilot</Typography>
              </ListItemContent>
            </ListItemButton>
            </Link>
          </ListItem>

          <ListItem>
          <Link to="/systems">
            <ListItemButton>
              <DashboardRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Systems</Typography>
              </ListItemContent>
            </ListItemButton>
            </Link>
          </ListItem>

          <ListItem>
          <Link to="/payloads">
            <ListItemButton>
            <ShoppingCartRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Payloads</Typography>
              </ListItemContent>
            </ListItemButton>
            </Link>
          </ListItem>
        </List>
        <List
          size="sm"
          sx={{
            mt: 'auto',
            flexGrow: 0,
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
            '--List-gap': '8px',
            mb: 2,
          }}
        >
          <ColorSchemeToggle sx={{ ml: 'auto' }} />
          <ListItem>
            <ListItemButton onClick={toggleSettings(true)}>
              <SettingsRoundedIcon />
              Settings
            </ListItemButton>
            <Drawer anchor="bottom" open={open} onClose={toggleSettings(false)}> {/* Add this line */}
              {list()}
            </Drawer>
          </ListItem>
        </List>
        
      </Box>
    </Sheet>
  );
}