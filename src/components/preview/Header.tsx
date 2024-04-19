import Icon from '@mdi/react';
import { mdiPhone, mdiEmail, mdiLinkedin, mdiGithub, mdiEarth } from '@mdi/js';

const iconMap: Map<keyof Contacts, JSX.Element> = new Map([
  ['phoneNumber', <Icon path={mdiPhone} className="preview-icon" />],
  ['email', <Icon path={mdiEmail} className="preview-icon" />],
  ['linkedIn', <Icon path={mdiLinkedin} className="preview-icon" />],
  ['github', <Icon path={mdiGithub} className="preview-icon" />],
  ['portfolio', <Icon path={mdiEarth} className="preview-icon" />],
]);

interface HeaderProps {
  general: GeneralInfo;
  contacts: Contacts;
}

function Header({ general, contacts }: HeaderProps) {
  return (
    <div className="preview-header">
      <div className="preview-picture">
        <img src={general.imageSrc} alt="" />
      </div>
      <div className="header-info">
        <div className="header-info-general">
          <div className="header-info-name">
            {`${general.firstName} ${general.lastName}`}
          </div>
          <div className="header-info-pos">{general.position}</div>
        </div>
        <ul className="header-info-contacts">
          {Object.entries(contacts)
            .filter((entry) => {
              return !!entry[1];
            })
            .map(([key, value]) => {
              return (
                <li key={key}>
                  {iconMap.get(key as keyof Contacts)}
                  {value}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
