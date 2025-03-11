interface SectionHeaderProps {
    title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
    return (
        <h2 className="font-acorn text-3xl sm:text-4xl md:text-5xl lg:text-5xl color-effect tracking-normal">
            {title}
        </h2>
    );
};

export default SectionHeader;
