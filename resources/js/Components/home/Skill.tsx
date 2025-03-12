import SectionHeader from "../layout/SectionHeader";

interface Props {
    skillData: Skill[];
}

export default function Skill({ skillData }: Props) {
    return (
        <div className="skill-wrapper">
            <div className="container mx-auto">
                <SectionHeader title="My Skills" />
                <div className="h-full w-full flex justify-center">
                    <div className="w-full grid grid-cols-1 gap-x-6 p-7 gap-y-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-6 py-6">
                        {skillData.map((skill, index) => (
                            <div className="group relative" key={index}>
                                <div className="border shadow-sm rounded-lg bg-white relative flex flex-wrap">
                                    <img src={skill.imageUrl} className="object-contain p-6 w-full object-center" alt={`${skill.name} logo`} />
                                    <p>{skill.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}