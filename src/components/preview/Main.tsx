interface MainProps {
  experience: Experience[];
  education: Education[];
  skills: Skill[];
}

function Main({ experience, education, skills }: MainProps) {
  return (
    <div className="preview-main">
      {!!experience.length && (
        <div className="preview-main-heading">Experience</div>
      )}
      {experience.map((exp) => {
        return (
          <div key={exp.id} className="preview-main-item">
            <div className="preview-item-title">{exp.job}</div>
            <div className="preview-item-info">
              <div className="preview-item-comp">{exp.company}</div>
              <div className="preview-item-date">
                {`${exp.start} - ${exp.end ? exp.end : 'Present'}`}
              </div>
            </div>
            <div className="preview-description">{exp.description}</div>
          </div>
        );
      })}
      {!!education.length && (
        <div className="preview-main-heading">Education</div>
      )}
      {education.map((edu) => {
        return (
          <div key={edu.id} className="preview-main-item">
            <div className="preview-item-title">{edu.course}</div>
            <div className="preview-item-info">
              <div className="preview-item-comp">{edu.school}</div>
              <div className="preview-item-date">
                {`${edu.start} - ${edu.end ? edu.end : 'Present'}`}
              </div>
            </div>
          </div>
        );
      })}
      {!!skills.length && <div className="preview-main-heading">Skills</div>}
      {skills.map((skill) => {
        return (
          <div key={skill.id} className="preview-main-item">
            <div className="preview-item-title">{skill.category}</div>
            <div className="preview-description">{skill.description}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
