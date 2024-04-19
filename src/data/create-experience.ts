import { v4 as uuidv4 } from 'uuid';

function createExperience(
  job = '',
  company = '',
  start = '',
  end = '',
  description = '',
): Experience {
  const id = uuidv4();
  return {
    id,
    job,
    company,
    start,
    end,
    description,
  };
}

export default createExperience;
