import Button from './Button';

interface ControlsProps {
  handleClearClick: () => void;
  handleExampleClick: () => void;
  printButton: JSX.Element;
}

function Controls({
  handleClearClick,
  handleExampleClick,
  printButton,
}: ControlsProps) {
  return (
    <div className="controls">
      <Button onClick={handleClearClick}>Clear</Button>
      <Button onClick={handleExampleClick}>Example</Button>
      {printButton}
    </div>
  );
}

export default Controls;
