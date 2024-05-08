import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import Button from '@mui/joy/Button';
import Slider from '@mui/joy/Slider';
import Switch from '@mui/joy/Switch';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Table from '@mui/joy/Table';

export default function PayloadTable() {
    return ( <Table>
        <tbody>
          <tr>
            <td>Payload Mode</td>
            <td>
              <Select defaultValue="none">
              <Option value="none">None</Option>
              <Option value="armp">Arm</Option>
                        <Option value="sci">Science</Option>
                        <Option value="exc">Excavator</Option>
                      </Select>
                      </td>
                    </tr>
              
              </tbody>
          </Table>)
}

