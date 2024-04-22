import Button from './Button';

interface ControlsProps {
  handleClearClick: () => void;
  handleExampleClick: () => void;
}

function Controls({ handleClearClick, handleExampleClick }: ControlsProps) {
  return (
    <div className="controls">
      <Button onClick={handleClearClick}>Clear</Button>
      <Button onClick={handleExampleClick}>Example</Button>
    </div>
  );
}

export default Controls;
