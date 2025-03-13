interface SectionHeaderProps {
    title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
    return (
        <div className="section-title">
            <h2 className="p-4 font-acorn text-2xl sm:text-3xl md:text-4xl lg:text-4xl color-effect tracking-normal">
                {title}
            </h2>
        </div>
    );
};

export default SectionHeader;
