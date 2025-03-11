interface ListItemProps {
    logo: string;
    title: string;
    subtitle?: string;
    description: string;
}

const ListItem: React.FC<ListItemProps> = ({ logo, title, subtitle, description }) => {
    return (
        <div className="flex items-center py-2">
            <div className="w-1/5 pr-8 py-8 rounded-lg">
                <div className="p-2 w-full h-full">
                    <img src={logo} alt={title} />
                </div>
            </div>
            <div className="w-4/5">
                <ul className="list-none">
                    <li className="leading-relaxed">
                        <p className="roboto-regular text-xl">{title}</p>
                        {subtitle && <p className="roboto-light">{subtitle}</p>}
                        <p className="roboto-light text-gray-400 text-sm">{description}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ListItem;
