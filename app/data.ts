import React from 'react'
import { FaRegEnvelope, FaLinkedinIn, FaGithub, FaRegFileLines} from "react-icons/fa6";

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type SocialLink = {
  label: string
  link: string
  icon: React.ComponentType<any>;
  className?: string
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'ONxpress Transportation Partners',
    title: 'Operations Systems Technical Lead',
    start: '2024',
    end: '2025',
    link: 'https://onxpress.com/',
    id: 'work1',
  },
  {
    company: 'ONxpress Transportation Partners',
    title: 'Operations Systems QA Analyst',
    start: '2023',
    end: '2024',
    link: 'https://onxpress.com/',
    id: 'work2',
  },
  {
    company: 'Thales Group',
    title: 'Software Analyst Intern',
    start: '2021',
    end: '2022',
    link: 'https://www.thalesgroup.com/en',
    id: 'work3',
  },
]


export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Resume',
    link: '/Resume.pdf',
    icon: FaRegFileLines,
    // className: "bg-[#02180b] text-white hover:bg-green-950",
 },
  {
    label: 'Email',
    link: 'mailto:thomasjn19@gmail.com',
    icon: FaRegEnvelope 
  },
  {
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/justin-thomas-100/',
    icon: FaLinkedinIn  
  },
  {
    label: 'Github',
    link: 'https://github.com/JustinT-compsci',
    icon: FaGithub 
  },
]

export const EMAIL = 'thomasjn19@gmail.com'
