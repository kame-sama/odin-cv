import Header from './Header';
import Main from './Main';
import './Preview.css';

interface PreviewProps {
  general: GeneralInfo;
  contacts: Contacts;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
}

function Preview({
  general,
  contacts,
  experience,
  education,
  skills,
}: PreviewProps) {
  return (
    <div className="preview">
      <div className="preview-body">
        <Header general={general} contacts={contacts} />
        <Main experience={experience} education={education} skills={skills} />
      </div>
    </div>
  );
}

export default Preview;
