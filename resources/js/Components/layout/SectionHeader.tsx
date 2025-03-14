interface SectionHeaderProps {
    title: string;
    description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
    return (
        <div className="section-title p-4">
            <h2 className="font-acorn text-2xl sm:text-3xl md:text-4xl lg:text-4xl color-effect tracking-normal">
                {title}
            </h2>
            <p className="quicksand-medium text-sm text-muted-foreground">{description}</p>
        </div>
    );
};

export default SectionHeader;
