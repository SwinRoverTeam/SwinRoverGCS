import { Box, Typography } from '@mui/joy';
import Arm from './Arm';
import Science from './Science';
import Excavator from './Excavator';


interface ViewProps {
    viewType: 'arm' | 'science' | 'excavator';
  }

export default function Payloads(){
    return (
      <Arm />
    )
}