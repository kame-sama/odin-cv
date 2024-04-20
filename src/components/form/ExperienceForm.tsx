import Button from '../Button';
import Input from '../Input';
import TextArea from '../TextArea';
import { Fragment } from 'react/jsx-runtime';

interface ExperienceProps {
  data: Experience[];
  handleInputChange: (
    field: keyof Experience,
    id: string,
    value: string,
  ) => void;
  handleAddClick: () => void;
  handleDeleteClick: (id: string) => void;
}

interface FormProps {
  data: Experience;
  handleInputChange: (
    field: keyof Experience,
    id: string,
    value: string,
  ) => void;
  handleDeleteClick: (id: string) => void;
}

function Form({ data, handleInputChange, handleDeleteClick }: FormProps) {
  return (
    <div id={data.id} className="sub-form">
      <Input
        label="Job: "
        id={`job-${data.id}`}
        value={data.job}
        onChange={(e) => handleInputChange('job', data.id, e.target.value)}
      />
      <Input
        label="Company: "
        id={`company-${data.id}`}
        value={data.company}
        onChange={(e) => handleInputChange('company', data.id, e.target.value)}
      />
      <Input
        label="Start date: "
        id={`start-${data.id}`}
        value={data.start}
        type="month"
        onChange={(e) => handleInputChange('start', data.id, e.target.value)}
      />
      <Input
        label="End date: "
        id={`end-${data.id}`}
        value={data.end}
        type="month"
        onChange={(e) => handleInputChange('end', data.id, e.target.value)}
      />
      <TextArea
        label="Description: "
        id={`desc-${data.id}`}
        value={data.description}
        onChange={(e) =>
          handleInputChange('description', data.id, e.target.value)
        }
      />
      <Button variant="delete" onClick={() => handleDeleteClick(data.id)}>
        Delete
      </Button>
    </div>
  );
}

function ExperienceForm({
  data,
  handleInputChange,
  handleAddClick,
  handleDeleteClick,
}: ExperienceProps) {
  return (
    <div className="form-section">
      {data.map((d) => (
        <Fragment key={d.id}>
          <Form
            data={d}
            handleInputChange={handleInputChange}
            handleDeleteClick={handleDeleteClick}
          />
          <hr />
        </Fragment>
      ))}
      <Button id="add-exp" onClick={handleAddClick}>
        Add
      </Button>
    </div>
  );
}

export default ExperienceForm;
