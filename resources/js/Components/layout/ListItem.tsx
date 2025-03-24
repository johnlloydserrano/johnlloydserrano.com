import {
    Card,
} from "@/Components/ui/card"

interface Props {
    logo: string;
    title: string;
    subtitle?: string;
    description: string;
}

export default function ListItem({ logo, title, subtitle, description }: Props) {
    return (
        <Card className="flex items-center pb-4 rounded-none border-x-0 border-t-0 border-b-gray-200 shadow-none">
            <div className="w-1/5 h-24 py-2 flex justify-center items-center">
                <div
                    className="h-full w-full bg-center bg-contain bg-no-repeat"
                    style={{
                        backgroundImage: `url(${logo})`,
                    }}
                    aria-label={title}
                    role="img"
                />
            </div>
            <div className="w-4/5">
                <ul className="list-none">
                    <li className="leading-relaxed pl-6 md:pl-0">
                        <p className="quicksand-medium text-md">{title}</p>
                        {subtitle && <p className="quicksand-regular text-sm">{subtitle}</p>}
                        <p className="quicksand-regular text-title-sub text-sm">{description}</p>
                    </li>
                </ul>
            </div>
        </Card>
    );
};