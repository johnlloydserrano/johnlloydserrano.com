import { Education } from '@/models/educations/types';
import { Hero } from '@/models/heroes/types';
import { PersonalProject } from '@/models/personalProjects/types';
import { PrivacyPolicy } from '@/models/privacyPolicies/types';
import { ProjectDetail } from '@/models/projects/types';
import { Section } from '@/models/sections/types';
import { Service } from '@/models/services/types';
import { Skill } from '@/models/skills/types';
import { SocialLink } from '@/models/socialLinks/types';
import { WorkExperience } from '@/models/workExperiences/types';

// STATIC DATA

export const sectionData: Section[] = [
  { name: 'header.experience', id: 'experience' },
  { name: 'header.skills', id: 'skills' },
  { name: 'header.services', id: 'services' },
  { name: 'header.personalProjects', id: 'personal-projects' },
  { name: 'header.achievements', id: 'achievements' },
  { name: 'header.contact', id: 'contact' },
];

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
  site: 'johnlloydserrano.com',
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

export const skillData: Skill[] = [
  {
    id: '16f7cb67-738d-492e-be96-5dcb3152f810',
    name: 'MYSQL',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-mysql.png',
  },
  {
    id: '266b16fe-3b0a-454c-b77c-02b56699a51e',
    name: 'LARAVEL',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-laravel.png',
  },
  {
    id: 'a2dd2456-a4ee-4bf5-8981-16d561e94abf',
    name: 'TYPESCRIPT',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-typescript.png',
  },
  {
    id: '3f93a539-2743-4363-b358-7c29ae271545',
    name: 'EXPRESS',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-express.png',
  },
  {
    id: '483fb372-5cf9-46ba-8082-3dd243f4001a',
    name: 'JENKINS',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-jenkins.png',
  },
  {
    id: '3c24bf61-dd03-4a5c-841e-2c148d444a49',
    name: 'FLASK',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-flask.png',
  },
  {
    id: '02389da1-c889-4c7c-889f-f992c73d6267',
    name: 'SASS',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-sass.png',
  },
  {
    id: 'a077d169-50fe-479c-8dad-43f24986c125',
    name: 'AWS',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-aws.png',
  },
  {
    id: '7d05f2ff-a923-455d-9444-6f7b8b73f66b',
    name: 'JAVASCRIPT',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-javascript.png',
  },
  {
    id: '8c80cfe7-a458-407a-a56c-e6276f5b6dff',
    name: 'PYTHON',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-python.png',
  },
  {
    id: '3a2af94b-35f9-4605-b38f-4df9a1f19565',
    name: 'PHP',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-php.png',
  },
  {
    id: 'c7099f75-2344-4988-92f3-ce187faf4f46',
    name: 'TAILWIND',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-tailwind.png',
  },
  {
    id: '5006488a-4265-4000-829b-6a315e944ae1',
    name: 'NEXT JS',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-next.png',
  },
  {
    id: 'a9174928-88fc-47a1-9812-c632316b9fb5',
    name: 'HTML',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-html.png',
  },
  {
    id: 'ce91e543-0090-4198-aeab-434ff3960dce',
    name: 'NODE JS',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-node.png',
  },
  {
    id: '7563ebec-be75-4fa0-9ca7-fed208ab8e62',
    name: 'GOOGLE CLOUD',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-gcp.png',
  },
  {
    id: 'ebfce840-57ea-49cc-b005-379977b3b5b6',
    name: 'CSS',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-css.png',
  },
  {
    id: '78952a13-12d3-4c24-8e17-e4d47f87a1af',
    name: 'RUBY',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-ruby.png',
  },
  {
    id: 'f797e6cf-4c9a-4451-8dae-981c8bdd4e7f',
    name: 'RUBY ON RAILS',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-ror.png',
  },
  {
    id: '2ef11c43-059d-4a3d-8632-4db799479853',
    name: 'CAKE PHP',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-cakephp.png',
  },
  {
    id: 'a9f188cc-6702-4bd4-aea9-e7f98e634012',
    name: 'REACT',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-react.png',
  },
  {
    id: '78d45601-951d-476f-baa7-b58e5aecc0d7',
    name: 'JIRA',
    imageUrl:
      'https://cloudfront.johnlloydserrano.com/public/images/static/logomark-jira-lg.png',
  },
];

export const personalProjectsData: PersonalProject[] = [
  {
    id: '35db5cf9-1372-482d-a5f8-d0bb068dbae5',
    name: 'Portfolio Website',
    slug: 'portfolio-website',
    imageUrl: 'https://cloudfront.johnlloydserrano.com/public/images/static/personal-portfolio-website-banner.svg',
    description: 'A project created to highlight professional experience, skills, and a selection of work. The project is designed with a clean, responsive layout, ensuring that it presents work in an organized, accessible, and visually appealing manner.',
    productHunt: { "title": "Product Hunt", "position": "#32", "totalLaunches": "200+ launches", "launchDate": "October 31, 2025", "logoUrl": "https://cloudfront.johnlloydserrano.com/public/images/official-logo/product-hunt-logo-icon.webp" }, // You'll need to provide the actual productHunt object structure
  },
]

export const projectDetailsData: ProjectDetail[] = [
  {
    id: 'c6e164fc-5f03-499a-8d4e-b1eb3cdd8188',
    slug: 'portfolio-website',
    title: 'Personal Portfolio Website',
    overview: 'This project is a fully responsive and modern personal portfolio website built with Next.js 14 (App Router) and TypeScript. It showcases my background, skills, services, experience, and achievements as a web developer through a clean and minimal design. The website serves as both an interactive resume and a live demonstration of my technical abilities, emphasizing performance, scalability, and security.',
    objectives: [
      'Create a professional digital space that represents my skills and experience.',
      'Build a maintainable, production-grade web application using modern technologies.',
      'Deploy a secure, scalable infrastructure using AWS services and custom domain integration.'
    ],
    keyFeatures: [
      'Fully responsive and adaptive layout optimized for all screen sizes.',
      'Smooth animations and page transitions powered by Framer Motion.',
      'Contact form with React Hook Form and Zod validation.',
      'Modular and reusable component architecture built with shadcn/ui and Tailwind CSS.',
      'Dedicated sections for Education, Experience, Skills, Services, Projects, Achievements, and Contact.',
      'Scored 95% in LightSpeed performance benchmark.',
      'Optimized for SEO, accessibility, and performance using Next.js'
    ],
    techStack: [
      'Frontend: Next.js 14, TypeScript, Tailwind CSS',
      'UI & Animations: shadcn/ui, Framer Motion',
      'Forms & Validation: React Hook Form, Zod',
      'Backend & Hosting: AWS Amplify',
      'Database: AWS DynamoDB',
      'Email Service: AWS Simple Email Service (SES)',
      'Version Control: Git, GitHub'
    ],
    outcomes: 'Through this project, I gained extensive hands-on experience with Next.js 14, TypeScript, and AWS architecture, deepening my understanding of how modern frameworks and cloud services work together to build scalable applications. I also developed a stronger grasp of cloud infrastructure, DNS management, SSL configuration, and CI/CD deployment pipelines, allowing me to confidently manage end-to-end deployment workflows. This project further enhanced my skills in responsive web design, animation performance, and backend integration, ensuring the site performs smoothly across all devices. Ultimately, it resulted in a professional, fast, and secure website that not only represents my technical identity but also serves as a living example of my development standards and attention to detail.',
    design: 'Designed with simplicity and clarity in mind, focusing on intuitive navigation, strong visual hierarchy, and a minimal, distraction-free layout. The user interface was carefully structured to highlight key information such as projects and experience while maintaining a cohesive visual identity. Prototypes and wireframes were created in Figma to define the structure and flow before development, ensuring a consistent and engaging user experience across devices.',
    improvements: [
      'Build a blog section to share insights and tutorials.',
      'Introduce a testimonials section to showcase client or collaborator feedback.',
      'Add printable or downloadable resume and skill sheets'
    ],
    conclusion: 'This project represents not only my technical growth but also my personal standard for building clean, performant, and maintainable applications. It continues to evolve as I learn and adopt new technologies, serving as both a personal brand and a foundation for future experiments and improvements.',
    images: {"banner":"https://cloudfront.johnlloydserrano.com/public/images/static/personal-portfolio-website-banner.svg","diagram":"https://cloudfront.johnlloydserrano.com/public/images/static/structure-diagram.png"},
    repository: 'https://github.com/johnlloydserrano/johnlloydserrano.com',
    productHunt: {"description":"This was my first public portfolio launch on Product Hunt, sharing my work and journey as a web developer. I am amazed by the support from the developer community, who took the time to explore my portfolio and leave feedback even though it is not a full product. The experience has been encouraging and motivating, showing me that personal projects can be noticed and appreciated.","position":"#32","totalLaunches":"200+ launches","launchDate":"October 31, 2025","embedImageUrl":"https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1032511&theme=light&t=1761873028499","screenshots":["https://cloudfront.johnlloydserrano.com/public/images/static/product-hunt-portfolio-1.png","https://cloudfront.johnlloydserrano.com/public/images/static/product-hunt-portfolio-2.png"],"link":"https://www.producthunt.com/products/john-lloyd-serrano?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-john-lloyd-serrano-2"},
  },
];