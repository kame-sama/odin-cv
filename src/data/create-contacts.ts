function createContacts(
  phoneNumber = '',
  email = '',
  linkedIn = '',
  github = '',
  portfolio = '',
): Contacts {
  return {
    phoneNumber,
    email,
    linkedIn,
    github,
    portfolio,
  };
}

export default createContacts;
