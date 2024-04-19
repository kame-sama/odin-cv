function createUser(
  firstName = '',
  lastName = '',
  position = '',
  imageSrc = '',
): GeneralInfo {
  return {
    firstName,
    lastName,
    position,
    imageSrc,
  };
}

export default createUser;
