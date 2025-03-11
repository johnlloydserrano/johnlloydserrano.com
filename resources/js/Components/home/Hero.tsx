const HeroSection: React.FC<HeroSectionProps> = ({ name, imageUrl, headline, paragraphs }) => {
    return (
        <section className="container mx-auto w-full h-full flex items-center">
            <div className="h-full">
                <div className="flex items-start justify-center">
                    <div className="p-12 text-start">
                        <p className="font-acorn text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-xxl-responsive tracking-tight color-effect leading-tight">
                            {name}
                        </p>
                    </div>
                </div>
                <div className="h-full flex flex-col md:flex-row p-6">
                    <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
                        <img className="h-72 sm:h-80 md:h-96" src={imageUrl} alt={name} />
                    </div>
                    <div className="h-full w-full md:w-1/2 px-4">
                        <p className="font-acorn text-4xl sm:text-5xl md:text-6xl lg:text-5xl color-effect">{headline}</p>
                        <div className="space-y-4 pt-12 quicksand-semibold text-text text-base sm:text-md tracking-wide leading-relaxed">
                            {paragraphs.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;