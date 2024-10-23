interface Skill {
  name: string;
  image: string;
}

export default function Skill() {
  const skills: Skill[] = [
    { name: 'Vue', image: 'images/blog-uo-ux-img1.jpg' },
    { name: 'Laravel', image: 'images/blog-uo-ux-img1.jpg' },
    { name: 'React', image: 'images/blog-uo-ux-img1.jpg' },
    { name: 'Node.js', image: 'images/blog-uo-ux-img1.jpg' },
    { name: 'TypeScript', image: 'images/blog-uo-ux-img1.jpg' },
    { name: 'AWS', image: 'images/blog-uo-ux-img1.jpg' },
    { name: 'Docker', image: 'images/blog-uo-ux-img1.jpg' },
    { name: 'Kubernetes', image: 'images/blog-uo-ux-img1.jpg' },
    { name: 'PostgreSQL', image: 'images/blog-uo-ux-img1.jpg' },
    { name: 'MySQL', image: 'images/blog-uo-ux-img1.jpg' },
  ];

  return (
    <div className="skill-wrapper bg-white">
      <div className="container mx-auto pt-20 pb-16">
        <div className="w-1/2 px-16">
          <h2 className="roboto-regular text-4xl tracking-normal">My Skill</h2>
        </div>
        <div className="container mx-auto py-12">
          <div className="h-full w-full flex">
            <div className="flex justify-center mx-8">
              <div className="w-full grid grid-cols-1 gap-x-6 p-7 gap-y-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-6 py-6">
                {skills.map((skill, index) => (
                  <div className="group relative" key={index}>
                    <div className="border shadow-sm rounded-lg bg-white relative flex flex-wrap">
                      <img src={skill.image} className="object-contain p-6 w-full object-center" alt={`${skill.name} logo`} />
                      <p>{skill.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
