import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import Button from '@mui/joy/Button';
import Slider from '@mui/joy/Slider';
import Switch from '@mui/joy/Switch';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Table from '@mui/joy/Table';

export default function PowerTable() {
    return ( <Table>
        <tbody>
              <tr>
                <td>Power Mode</td>
                <td>
                <ToggleButtonGroup>
                    <Button>Low</Button>
                    <Button>Bal</Button>
                    <Button>High</Button>
                  </ToggleButtonGroup>
                </td>
              </tr>
              <tr>
                <td>Controller</td>
                <td>
                  <Switch sx={{my: 1}} />
                  </td>
              </tr>
              <tr>
                <td>Motor Driver</td>
                <td>
                  <Switch sx={{my: 1}} />
                  </td>
              </tr>
              <tr>
                <td>Payload Supply</td>
                <td>
                  <Switch sx={{my: 1}} />
                  </td>
              </tr>
              <tr>
                <td>Remote Module</td>
                <td>
                  <Switch sx={{my: 1}} />
                  </td>
              </tr>
              
              </tbody>
          </Table>)
}

