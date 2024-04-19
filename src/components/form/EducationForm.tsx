import Button from '../Button';
import Input from '../Input';

interface EducationProps {
  data: Education[];
  handleInputChange: (
    field: keyof Education,
    id: string,
    value: string,
  ) => void;
  handleAddClick: () => void;
  handleDeleteClick: (id: string) => void;
}

interface FormProps {
  data: Education;
  handleInputChange: (
    field: keyof Education,
    id: string,
    value: string,
  ) => void;
  handleDeleteClick: (id: string) => void;
}

function Form({ data, handleInputChange, handleDeleteClick }: FormProps) {
  return (
    <div id={data.id} className="sub-form">
      <Input
        label="Course: "
        id={`course-${data.id}`}
        value={data.course}
        onChange={(e) => handleInputChange('course', data.id, e.target.value)}
      />
      <Input
        label="School: "
        id={`school-${data.id}`}
        value={data.school}
        onChange={(e) => handleInputChange('school', data.id, e.target.value)}
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
      <Button onClick={() => handleDeleteClick(data.id)}>Delete</Button>
    </div>
  );
}

function EducationForm({
  data,
  handleInputChange,
  handleAddClick,
  handleDeleteClick,
}: EducationProps) {
  return (
    <div className="form-section">
      <h2>Education</h2>
      <Button id="add-edu" onClick={handleAddClick}>
        Add
      </Button>
      {data.map((d) => (
        <Form
          key={d.id}
          data={d}
          handleInputChange={handleInputChange}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
    </div>
  );
}

export default EducationForm;
