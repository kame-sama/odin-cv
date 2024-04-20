import { ChangeEvent } from 'react';
import InputFile from '../InputFile';
import Input from '../Input';

interface GeneralProps {
  data: GeneralInfo;
  handleInputChange: (field: keyof GeneralInfo, value: string) => void;
  handleFileUpload: (ev: ChangeEvent<HTMLInputElement>) => void;
}

function GeneralForm({
  data,
  handleInputChange,
  handleFileUpload,
}: GeneralProps) {
  return (
    <div className="form-section">
      <Input
        label="First name: "
        id="first-name"
        value={data.firstName}
        onChange={(ev) => handleInputChange('firstName', ev.target.value)}
      />
      <Input
        label="Last name: "
        id="last-name"
        value={data.lastName}
        onChange={(ev) => handleInputChange('lastName', ev.target.value)}
      />
      <Input
        label="Position: "
        id="position"
        value={data.position}
        onChange={(ev) => handleInputChange('position', ev.target.value)}
      />
      <InputFile
        label="Upload image"
        id="upload-image"
        accept=".png, .jpg, .jpeg"
        onChange={handleFileUpload}
      />
    </div>
  );
}

export default GeneralForm;
