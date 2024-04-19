/// <reference types="vite/client" />

type GeneralInfo = {
  firstName: string;
  lastName: string;
  position: string;
  imageSrc: string;
};

type Contacts = {
  phoneNumber: string;
  email: string;
  linkedIn: string;
  github: string;
  portfolio: string;
};

type Experience = {
  id: string;
  job: string;
  company: string;
  start: string;
  end: string;
  description: string;
};

type Education = {
  id: string;
  course: string;
  school: string;
  start: string;
  end: string;
};

type Skill = {
  id: string;
  category: string;
  description: string;
};
