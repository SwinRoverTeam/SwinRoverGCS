import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import Button from '@mui/joy/Button';
import Slider from '@mui/joy/Slider';
import Switch from '@mui/joy/Switch';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Table from '@mui/joy/Table';


export default function DriveTable() {
    return ( <Table>
        <tbody>
            <tr>
              <td>Torque Level</td>
              <td><Slider
              aria-label="Small steps"
              defaultValue={1}
              step={1}
              marks
              min={1}
              max={10}
              valueLabelDisplay="auto"
            /></td>
            </tr>
            <tr>
              <td>Steering Mode</td>
              <td>
                <ToggleButtonGroup>
                  <Button>Crab</Button>
                  <Button>FS</Button>
                  <Button>Forklift</Button>
                </ToggleButtonGroup>
              </td>
            </tr>
            <tr>
              <td>Traction Control</td>
              <td>
                <ToggleButtonGroup>
                  <Button>Enable</Button>
                  <Button>Disable</Button>
                </ToggleButtonGroup>
              </td>
            </tr>
            <tr>
              <td>Full Boar</td>
              <td>
                <ToggleButtonGroup>
                  <Button>Enable</Button>
                  <Button>Disable</Button>
                </ToggleButtonGroup>
              </td>
            </tr>
            
            </tbody>
        </Table>
        )
}