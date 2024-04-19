import { v4 as uuidv4 } from 'uuid';

function createEducation(
  course = '',
  school = '',
  start = '',
  end = '',
): Education {
  const id = uuidv4();
  return {
    id,
    course,
    school,
    start,
    end,
  };
}

export default createEducation;
