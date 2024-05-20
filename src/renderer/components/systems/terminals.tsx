import { Divider, Grid, List, ListItem, Typography } from '@mui/joy';
import { Box } from '@mui/system';
import Card from '@mui/joy/Card';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Power from './components/power';
import Drive from './components/Drivetrain';
import TerminalController from './components/Terminal';
import Payload from './components/Payload';




export default function Terminals() {
    const handleTerminalInput = (input:string) => {
      console.log(`You entered: ${input}`);
    };
    return <Grid container spacing={2} sx={{
            display: 'grid',
            gridTemplateColumns: { md: '1fr 1fr' },
            height: '100%',
          }}>
      
      <Card sx={{py: 2, px: 3}}> 
      <Typography level='title-lg'>Subsystem Terminal</Typography>
        <TerminalController onInput={handleTerminalInput} />       
      </Card>
      <Card >
        <Tabs>
          <TabList>
            <Tab
              variant="plain"
              color="danger">Power Systems</Tab>
            <Tab
              variant="plain"
              color="danger">Drivetrain</Tab>

            <Tab
              variant="plain"
              color="danger">CAN</Tab>
            <Tab
              variant="plain"
              color="danger">Payload</Tab>
            <Tab
              variant="plain"
              color="danger">Communications</Tab>
          </TabList>
          <TabPanel value={0}><Power/></TabPanel>
          <TabPanel value={1}><Drive/></TabPanel>
          <TabPanel value={2}><Drive/></TabPanel>
          <TabPanel value={3}><Payload/></TabPanel>

      </Tabs>
      </Card>   
    </Grid>
}