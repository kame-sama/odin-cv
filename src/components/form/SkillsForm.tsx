import Button from '../Button';
import Input from '../Input';
import TextArea from '../TextArea';

interface SkillsProps {
  data: Skill[];
  handleInputChange: (field: keyof Skill, id: string, value: string) => void;
  handleAddClick: () => void;
  handleDeleteClick: (id: string) => void;
}

interface FormProps {
  data: Skill;
  handleInputChange: (field: keyof Skill, id: string, value: string) => void;
  handleDeleteClick: (id: string) => void;
}

function Form({ data, handleInputChange, handleDeleteClick }: FormProps) {
  return (
    <div id={data.id} className="sub-form">
      <Input
        label="Category: "
        id={`category-${data.id}`}
        value={data.category}
        onChange={(e) => handleInputChange('category', data.id, e.target.value)}
      />
      <TextArea
        label="Description: "
        id={`desc-${data.id}`}
        value={data.description}
        onChange={(e) =>
          handleInputChange('description', data.id, e.target.value)
        }
      />
      <Button onClick={() => handleDeleteClick(data.id)}>Delete</Button>
    </div>
  );
}

function SkillsForm({
  data,
  handleInputChange,
  handleAddClick,
  handleDeleteClick,
}: SkillsProps) {
  return (
    <div className="form-section">
      <Button id="add-skill" onClick={handleAddClick}>
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

export default SkillsForm;
