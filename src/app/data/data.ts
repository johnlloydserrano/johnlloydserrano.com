// TODO: make a backend for this data

import { Education } from '@/models/educations/types';
import { Hero } from '@/models/heroes/types';
import { PersonalProject } from '@/models/personalProjects/types';
import { PrivacyPolicy } from '@/models/privacyPolicies/types';
import { Section } from '@/models/sections/types';
import { Service } from '@/models/services/types';
import { Skill } from '@/models/skills/types';
import { SocialLink } from '@/models/socialLinks/types';
import { Timeline } from '@/models/timelines/types';
import { WorkExperience } from '@/models/workExperiences/types';

export const heroData: Hero = {
  name: "Hello I'm John.",
  imageUrl:
    'https://cloudfront.johnlloydserrano.com/public/images/static/serrano.png',
  headline:
    'A Web Developer delivering thoughtful, reliable, and scalable solutions.',
  paragraphs: [
    "I've built my career through continuous learning and hands-on experience, contributing to projects that turn ideas into useful, reliable solutions. I approach each challenge by carefully following established practices, adapting to new technologies, and focusing on what the team and project need to succeed.",
    'I focus on writing clean, maintainable code and developing systems that stay clear and scalable over time. I value collaboration, good organization, and delivering results that clients and teams can rely on.',
    "I'm always looking for ways to improve, whether through developing new skills, refining workflows, or adjusting processes, to ensure that the work I do supports business needs and maintains high standards of quality.",
  ],
};

export const educationData: Education[] = [
  {
    id: 1,
    logo: 'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-uc.jpg',
    school: 'College University of Cebu Main Campus',
    degree: 'Bachelor of Science in Information Technology (BSIT)',
    year: '2018 (To be continued soon)',
  },
  {
    id: 2,
    logo: 'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-uc.jpg',
    school: 'University of Cebu - Main Campus SHS Dept.',
    degree: 'Technical Vocational Livelihood (ICT Strand)',
    year: '2016 – 2018',
  },
  {
    id: 3,
    logo: 'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-pardo.png',
    school: 'Pardo National High School',
    year: '2012 – 2016',
  },
  {
    id: 4,
    logo: 'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-cugman.png',
    school: 'Cugman Elementary School',
    year: '2010 – 2011 & 2011 – 2012',
  },
  {
    id: 5,
    logo: 'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-inayawan.jpg',
    school: 'Inayawan Elementary School',
    year: '2006 – 2010 & 2011 – 2012',
  },
];

export const workExperienceData: WorkExperience[] = [
  {
    id: 1,
    logo: 'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-hipe.jpg',
    company: 'HIPE Japan Inc.',
    role: 'Web Developer',
    period: 'November 2021 – Present',
  },
  {
    id: 2,
    logo: 'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-jogx.webp',
    company: 'JOGXPRESS',
    role: 'Web Developer',
    period: 'March 2021 – November 2021',
  },
  {
    id: 3,
    logo: 'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-wlc.png',
    company: 'WLCLIFE Support Sales & Leasing',
    role: 'Web Developer',
    period: 'March 2018 – September 2020',
  },
  {
    id: 4,
    logo: 'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-wlc.png',
    company: 'WLCLIFE Support Sales & Leasing',
    role: 'IT Support Specialist',
    period: 'February 2018 – March 2018',
  },
  {
    id: 5,
    logo: 'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-hilife.jpg',
    company: 'HI-LIFE MARKETING',
    role: 'IT Support Specialist (SHS Internship/OJT)',
    period: 'November 2017 – January 2018',
  },
];

export const skillData: Skill[] = [
  {
    name: 'HTML',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-html.png',
  },
  {
    name: 'CSS',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-css.png',
  },
  {
    name: 'SASS',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-sass.png',
  },
  {
    name: 'TAILWIND',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-tailwind.png',
  },
  {
    name: 'PHP',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-php.png',
  },
  {
    name: 'LARAVEL',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-laravel.png',
  },
  {
    name: 'CAKE PHP',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-cakephp.png',
  },
  {
    name: 'RUBY',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-ruby.png',
  },
  {
    name: 'RUBY ON RAILS',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-ror.png',
  },
  {
    name: 'PYTHON',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-python.png',
  },
  {
    name: 'FLASK',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-flask.png',
  },
  {
    name: 'REACT',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-react.png',
  },
  {
    name: 'NEXT JS',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-next.png',
  },
  {
    name: 'NODE JS',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-node.png',
  },
  {
    name: 'EXPRESS',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-express.png',
  },
  {
    name: 'JAVASCRIPT',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-javascript.png',
  },
  {
    name: 'TYPESCRIPT',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-typescript.png',
  },
  {
    name: 'MYSQL',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-mysql.png',
  },
  {
    name: 'PRISMA',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-prisma.svg',
  },
  {
    name: 'GOOGLE CLOUD',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-gcp.png',
  },
  {
    name: 'AWS',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-aws.png',
  },
  {
    name: 'JENKIS',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-jenkins.png',
  },
  {
    name: 'JIRA',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-jira-lg.png',
  },
  {
    name: 'FIGMA',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-figma.png',
  },
];

export const personalProjectData: PersonalProject[] = [
  {
    name: 'Portfolio Website',
    slug: 'portfolio-website',
    imageUrl: 'https://dummyimage.com/600x400/000/fff.png&text=Portfolio',
    description:
      'A project created to highlight professional experience, skills, and a selection of work. The project is designed with a clean, responsive layout, ensuring that it presents work in an organized, accessible, and visually appealing manner.',
  },
];

export const timelineData: Timeline[] = [
  {
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-hipe-black.png',
    title: 'Officially Appointed as Treasurer of HIPE Japan Inc.',
    description:
      "I am honored to announce my appointment as the new Treasurer of HIPE Japan Inc., following the resignation of the previous treasurer. In this role, I will manage the company's financial activities and I am committed to maintaining transparency and accuracy in all financial matters and look forward to contributing to the company's continued success.",
    time: 'June, 2023',
  },
  {
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/may2023.jpg',
    title: 'Employee of the Month',
    description:
      'I am deeply honored to be named Employee of the Month. This recognition serves as a testament to the dedication and passion I pour into my work every day. It reflects the countless hours spent overcoming tight deadlines, solving complex challenges, and going the extra mile to deliver exceptional results for our clients. Each achievement is a step forward in my journey as a true full stack engineer, and I am immensely grateful for the opportunity to contribute to the ongoing success of our incredible team. This accolade fuels my commitment to excellence and inspires me to continue pushing the boundaries of what we can accomplish together.',
    time: 'May, 2023',
  },
  {
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/march2023.jpg',
    title: 'Employee of the Month',
    description:
      "I am incredibly proud to share that the entire team has been recognized as Employee of the Month. This honor reflects our collective passion, perseverance, and commitment to excellence. Together, we've made significant strides on all projects, consistently meeting challenging milestones and exceeding our weekly goals. This acknowledgment not only highlights our dedication but also celebrates the synergy and hard work that defines our team. I am truly grateful to be part of such a talented and accomplished group, and this recognition inspires us to continue achieving great things together.",
    time: 'March, 2023',
  },
  {
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-hipe-black.png',
    title: 'Officially Appointed as Team Leader of the Team (CEBU)',
    description:
      "I am excited to share my official appointment as the Team Leader of the Team. In this role, I am committed to guiding our team with a focus on innovation, effective collaboration, and meeting our project goals. My priority will be to support each team member's growth and to create an environment where everyone feels valued and empowered to contribute. Together, we will continue to advance the project, building on the strong foundation we've established. <br /><br /> I look forward to the opportunities and challenges ahead, knowing that our collective efforts will lead to continued success and meaningful progress. It's an honor to take on this responsibility, and I'm eager to work closely with the team to achieve our shared objectives.",
    time: 'January, 2023',
  },
  {
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/december2022.jpg',
    title: 'Employee of the Year',
    description:
      "When my journey began at HIPE Japan on November 17, 2021, I was introduced to the project. Responsible for both the backend and UI design of the project, it was initially a very hard and frustrating experience. For almost a month, I struggled as the sole handler of the project, with the language being new to me and no prior experience in Ruby and Ruby on Rails. However, with the help of other HIPE Japan members from different teams, I was able to execute the project successfully. I dedicated myself to ensuring seamless functionality and an intuitive user experience. To my surprise and immense gratitude, at HIPE Japan's 2022 Christmas party, I was awarded Employee of the Year. This recognition, given within my first year at the company, underscored my commitment and the impact of my contributions to the team's success.",
    time: 'December, 2022',
  },
  {
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/march2022.png',
    title: 'Employee of the Month',
    description:
      'I am very grateful to be named Employee of the Month. This recognition reflects my hard work and ability to handle responsibilities independently. I appreciate the acknowledgment and am committed to keeping up high standards in everything I do. I take pride in contributing to our goals and am excited to continue delivering great results. This award motivates me to stay focused and dedicated, and I look forward to making more positive contributions in the future.',
    time: 'March, 2022',
  },
  {
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/feb2022.png',
    title: 'Employee of the Month',
    description:
      'I am honored to be selected as Employee of the Month by the Director of HIPE Japan Inc. This recognition is particularly meaningful as it reflects not just my dedication but also the positive impact of my efforts. The Director\'s quote, "Since last year, he has worked hard alone, and our clients have recognized the results, which has led to an increase in the number of team members," highlights the success and growth that our work has achieved. I am deeply grateful for this acknowledgment and look forward to continuing to contribute to our collective success with enthusiasm and commitment.',
    time: 'February, 2022',
  },
];

export const sectionData: Section[] = [
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Services', id: 'services' },
  { name: 'Personal Projects', id: 'personal-projects' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Contact', id: 'contact' },
];

export const serviceData: Service[] = [
  {
    description:
      'Writing clean, maintainable code with attention to readability and long-term scalability.',
  },
  {
    description:
      'Careful implementation of designs from Figma or Adobe XD, aiming to align closely with design intent and provide a consistent front-end experience.',
  },
  {
    description:
      'Organized workflow and project tracking following SDLC processes using Jira.',
  },
  {
    description:
      'Setting up and managing AWS services, including load balancers, EC2 instances, S3 storage, CloudFront distributions, and related resources.',
  },
  {
    description:
      'Setting up and managing GCP services, including App Engine, Compute Engine, Load Balancers, and Cloud Storage configurations.',
  },
  {
    description:
      'Continuous Integration (CI) setup using GitHub Actions and Jenkins to automate builds and tests.',
  },
  {
    description:
      'Continuous Delivery (CD) and automated deployment pipelines using Jenkins and Terraform for consistent and reliable releases.',
  },
  {
    description:
      'Implementation of automated testing processes to help ensure code quality and deployment reliability.',
  },
  {
    description:
      'Using version control with clear branching strategies and collaborative code reviews on GitHub to keep projects organized and maintain quality.',
  },
];

export const socialLinksData: SocialLink[] = [
  {
    name: 'Facebook',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/official-logo/Facebook_Logo_Primary.png',
    url: 'https://www.facebook.com/jlsrno',
  },
  {
    name: 'Instagram',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/official-logo/Instagram_Glyph_Gradient.png',
    url: 'https://www.instagram.com/jlsrno',
  },
  {
    name: 'LinkedIn',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/official-logo/LI-In-Bug.png',
    url: 'https://linkedin.com/in/jl-serrano',
  },
  {
    name: 'X',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/official-logo/logo-black.png',
    url: 'https://x.com/jlsrno',
  },
  {
    name: 'GitHub',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/official-logo/github-mark.png',
    url: 'https://github.com/johnlloydserrano',
  },
];

export const privacyPolicyData: PrivacyPolicy = {
  title: 'Privacy Policy',
  description:
    'Your privacy is important to me. This Privacy Policy outlines how your personal information is collected, used, and protected when visiting and using this portfolio website ',
  items: [
    {
      number: 1,
      title: 'Information Collected',
      content:
        "You can provide me with the following information if you make use of this website's contact page:",
      list: ['Your name', 'Your email address', 'Your message'],
    },
    {
      number: 2,
      title: 'How Your Information is Used',
      content:
        'Your information is used to respond to your questions or messages sent using the contact page. I do not sell or transfer your information.',
    },
    {
      number: 3,
      title: 'Data Security',
      content:
        'I take adequate measures to safeguard your personal information that you send to me. Though I take security seriously and practice best practices, remember that no transmission or storage of information online can ever be assured to be secure.',
    },
    {
      number: 4,
      title: 'Third-Party Links',
      content:
        "This website may have links to other websites operated by a third party, like GitHub or LinkedIn. I have no control over such sites' privacy policies or content.",
    },
    {
      number: 5,
      title: 'Changes to This Policy',
      content:
        'This Privacy Policy can be updated over time. Any changes will be posted here.',
    },
    {
      number: 6,
      title: 'Contact',
      content:
        "If you have questions regarding this Privacy Policy, do not hesitate to contact through this website's contact page.",
    },
  ],
  update: 'Last updated: March 2025',
  author: 'John Lloyd Serrano',
};
