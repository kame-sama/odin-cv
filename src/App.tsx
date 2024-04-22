import { ChangeEvent, useState, useRef } from 'react';
import createContacts from './data/create-contacts';
import createEducation from './data/create-education';
import createExperience from './data/create-experience';
import createSkill from './data/create-skill';
import createUser from './data/create-user';
import * as example from './data/example-data';
import Accordion from './components/Accordion';
import GeneralForm from './components/form/GeneralForm';
import ContactsForm from './components/form/ContactsForm';
import ExperienceForm from './components/form/ExperienceForm';
import EducationForm from './components/form/EducationForm';
import SkillsForm from './components/form/SkillsForm';
import Preview from './components/preview/Preview';
import Controls from './components/Controls';
import ReactToPrint from 'react-to-print';
import Button from './components/Button';

function App() {
  const [general, setGeneral] = useState(createUser(...example.general));

  const handleGeneralChange = (field: keyof GeneralInfo, value: string) => {
    setGeneral({ ...general, [field]: value });
  };

  const handleGeneralUpload = (ev: ChangeEvent<HTMLInputElement>) => {
    const file = ev.target.files![0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('loadend', () => {
      handleGeneralChange('imageSrc', reader.result as string);
    });
  };

  const [contacts, setContacts] = useState(createContacts(...example.contacts));

  const handleContactsChange = (field: keyof Contacts, value: string) => {
    setContacts({ ...contacts, [field]: value });
  };

  const [experience, setExperience] = useState(
    example.experience.map((exp) => createExperience(...exp)),
  );

  const handleExperienceAdd = () => {
    setExperience([...experience, createExperience()]);
  };

  const handleExperienceDeleted = (id: string) => {
    setExperience(experience.filter((exp) => exp.id !== id));
  };

  const handleExperienceChange = (
    field: keyof Experience,
    id: string,
    value: string,
  ) => {
    setExperience(
      experience.map((exp) => {
        if (exp.id === id) {
          return { ...exp, [field]: value };
        } else {
          return exp;
        }
      }),
    );
  };

  const [education, setEducation] = useState(
    example.education.map((edu) => createEducation(...edu)),
  );

  const handleEducationAdd = () => {
    setEducation([...education, createEducation()]);
  };

  const handleEducationDelete = (id: string) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };

  const handleEducationChange = (
    field: keyof Education,
    id: string,
    value: string,
  ) => {
    setEducation(
      education.map((edu) => {
        if (edu.id === id) {
          return { ...edu, [field]: value };
        } else {
          return edu;
        }
      }),
    );
  };

  const [skills, setSkills] = useState(
    example.skills.map((skill) => createSkill(...skill)),
  );

  const handleSkillAdd = () => {
    setSkills([...skills, createSkill()]);
  };

  const handleSkillDelete = (id: string) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const handleSkillsChange = (
    field: keyof Skill,
    id: string,
    value: string,
  ) => {
    setSkills(
      skills.map((skill) => {
        if (skill.id === id) {
          return { ...skill, [field]: value };
        } else {
          return skill;
        }
      }),
    );
  };

  const accordionItems: AccordionItem[] = [
    {
      title: 'General',
      content: (
        <GeneralForm
          data={general}
          handleInputChange={handleGeneralChange}
          handleFileUpload={handleGeneralUpload}
        />
      ),
    },
    {
      title: 'Contacts',
      content: (
        <ContactsForm
          data={contacts}
          handleInputChange={handleContactsChange}
        />
      ),
    },
    {
      title: 'Experience',
      content: (
        <ExperienceForm
          data={experience}
          handleInputChange={handleExperienceChange}
          handleAddClick={handleExperienceAdd}
          handleDeleteClick={handleExperienceDeleted}
        />
      ),
    },
    {
      title: 'Education',
      content: (
        <EducationForm
          data={education}
          handleInputChange={handleEducationChange}
          handleAddClick={handleEducationAdd}
          handleDeleteClick={handleEducationDelete}
        />
      ),
    },
    {
      title: 'Skills',
      content: (
        <SkillsForm
          data={skills}
          handleInputChange={handleSkillsChange}
          handleAddClick={handleSkillAdd}
          handleDeleteClick={handleSkillDelete}
        />
      ),
    },
  ];

  const handleClearClick = () => {
    setGeneral(createUser());
    setContacts(createContacts());
    setExperience([]);
    setEducation([]);
    setSkills([]);
  };

  const handleExampleClick = () => {
    setGeneral(createUser(...example.general));
    setContacts(createContacts(...example.contacts));
    setExperience(example.experience.map((exp) => createExperience(...exp)));
    setEducation(example.education.map((edu) => createEducation(...edu)));
    setSkills(example.skills.map((skill) => createSkill(...skill)));
  };

  const ref = useRef<HTMLDivElement>(null);

  const PrintButton = (
    <ReactToPrint
      bodyClass="print"
      content={() => ref.current}
      trigger={() => <Button>Print</Button>}
    />
  );

  return (
    <>
      <Controls
        handleClearClick={handleClearClick}
        handleExampleClick={handleExampleClick}
        printButton={PrintButton}
      />
      <Accordion items={accordionItems} />
      <Preview
        general={general}
        contacts={contacts}
        experience={experience}
        education={education}
        skills={skills}
        ref={ref}
      />
    </>
  );
}

export default App;
