import { Ref, forwardRef } from 'react';
import Header from './Header';
import Main from './Main';
import './Preview.css';

type PreviewProps = {
  general: GeneralInfo;
  contacts: Contacts;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
};

const Preview = forwardRef(function Preview(
  props: PreviewProps,
  ref: Ref<HTMLDivElement>,
) {
  return (
    <div className="preview">
      <div className="preview-body" ref={ref}>
        <Header general={props.general} contacts={props.contacts} />
        <Main
          experience={props.experience}
          education={props.education}
          skills={props.skills}
        />
      </div>
    </div>
  );
});

export default Preview;
