import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import Button from '@mui/joy/Button';
import Slider from '@mui/joy/Slider';
import Switch from '@mui/joy/Switch';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Table from '@mui/joy/Table';


export default function PowerLevels() {
    return ( <Table>
        <tbody>
            <tr>
                <td>Controller Current Limit</td>
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
                <td>Motor Driver Current Limit</td>
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
        </tbody>
    </Table>)
  }