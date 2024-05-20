import * as React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/joy';

const TerminalContainer = styled(Box)({
  background: '#0b0d0e',
  color: '#ffffff',
  padding: '1em',
  borderRadius: '5px',
  fontFamily: 'monospace',
  fontSize: '1em',
  overflowY: 'auto',
  height: '30vh',
});
const TerminalLine = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const PromptSymbol = styled('span')({
  color: '#61dafb',
});

const TerminalInput = styled('input')({
  background: 'transparent',
  border: 'none',
  color: '#61dafb',
  outline: 'none',
  width: '100%',
});
const PreviousCommands = styled('div')({
  color: '#61dafb',
});

const Terminal = ({ onInput }) => {
  const inputRef = React.useRef(null as HTMLInputElement | null);
  const [commands, setCommands] = React.useState([]);
  const handleInput = (event) => {
    if (event.key === 'Enter') {
      setCommands([...commands, event.target.value]);
      onInput(event.target.value);
      event.target.value = '';
    }
  };
  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <TerminalContainer onClick={focusInput}>
      {commands.map((command, index) => (
        <div key={index}>
          <PromptSymbol>$:</PromptSymbol> {command}
        </div>
      ))}
      <TerminalLine>
        <PromptSymbol>$:</PromptSymbol>
      <TerminalInput ref={inputRef} onKeyPress={handleInput} />
      </TerminalLine>
    </TerminalContainer>
  );
};

export default Terminal;