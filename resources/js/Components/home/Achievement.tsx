import SectionHeader from "../layout/SectionHeader";

interface Props {
    achievementData: Achievement[];
}

export default function Achievement({ achievementData }: Props) {
    return (
        <div className="achievement-wrapper">
            <div className="container mx-auto">
                <SectionHeader title="My Achievements" />
                <div className="h-full w-full flex justify-center">
                    <div className="w-full grid grid-cols-1 gap-x-6 p-7 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6 py-6">
                        {achievementData.map((achievement, index) => (
                            <div className="group relative" key={index}>
                                <div className="border shadow-sm rounded-lg bg-white relative flex flex-wrap">
                                    <img src={achievement.imageUrl} className="object-contain p-6 w-full object-center" alt={`${achievement.title} logo`} />
                                    <p>{achievement.title}</p>
                                    <p>{achievement.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}