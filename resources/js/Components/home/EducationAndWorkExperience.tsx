import SectionHeader from "@/Components/layout/SectionHeader";
import ListItem from "@/Components/layout/ListItem";

type Props = {
    educationData: Education[];
    workExperienceData: WorkExperience[];
};

export default function EducationAndWorkExperience({ educationData, workExperienceData }: Props) {
    return (
        <section>
            <div className="education-wrapper">
                <div className="container mx-auto">
                    <div className="h-full w-full flex flex-col md:flex-row py-16">
                        <div className="w-full md:w-1/2 px-4 md:px-16 space-y-6">
                            <SectionHeader title="My Education" />
                            <div className="w-full flex flex-col divide-y divide-gray-100">
                                {educationData.map(({ id, logo, school, degree, year }) => (
                                    <ListItem key={id} logo={logo} title={school} subtitle={degree} description={year} />
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-4 md:px-16 space-y-6">
                            <SectionHeader title="My Work Experience" />
                            <div className="w-full flex flex-col divide-y divide-gray-100">
                                {workExperienceData.map(({ id, logo, company, role, period }) => (
                                    <ListItem key={id} logo={logo} title={company} subtitle={role} description={period} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
