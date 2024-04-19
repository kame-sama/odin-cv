import { v4 as uuidv4 } from 'uuid';

function createSkill(category = '', description = ''): Skill {
  const id = uuidv4();
  return {
    id,
    category,
    description,
  };
}

export default createSkill;
