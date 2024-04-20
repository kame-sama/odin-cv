import Input from '../Input';

interface ContactsProps {
  data: Contacts;
  handleInputChange: (field: keyof Contacts, value: string) => void;
}

function ContactsForm({ data, handleInputChange }: ContactsProps) {
  return (
    <div className="form-section">
      <Input
        label="Phone number: "
        id="phone-number"
        value={data.phoneNumber}
        onChange={(ev) => handleInputChange('phoneNumber', ev.target.value)}
      />
      <Input
        label="Email: "
        id="email"
        value={data.email}
        onChange={(ev) => handleInputChange('email', ev.target.value)}
      />
      <Input
        label="LinkedIn: "
        id="linkedin"
        value={data.linkedIn}
        onChange={(ev) => handleInputChange('linkedIn', ev.target.value)}
      />
      <Input
        label="GitHub: "
        id="github"
        value={data.github}
        onChange={(ev) => handleInputChange('github', ev.target.value)}
      />
      <Input
        label="Portfolio: "
        id="portfolio"
        value={data.portfolio}
        onChange={(ev) => handleInputChange('portfolio', ev.target.value)}
      />
    </div>
  );
}

export default ContactsForm;
