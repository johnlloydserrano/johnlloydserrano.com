import { Card, CardContent } from '@/app/components/atoms/Card';
import { Service } from '@/models/services/types';
import { Check } from 'lucide-react';
import { ReactNode } from 'react';

interface CardListProps {
  logo?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  listData?: Service[];
  icon?: ReactNode;
}

export default function CardList({
  logo,
  title,
  subtitle,
  description,
  listData,
  icon = <Check className="text-accent min-w-[20px] min-h-[20px]" />,
}: CardListProps) {
  if (listData && listData.length > 0) {
    return (
      <Card className="rounded-md border shadow-none border-none ">
        <CardContent className="px-4">
          <ul className="space-y-4">
            {listData.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 space-y-2.5 leading-relaxed mb-2"
              >
                {icon}
                <span className="quicksand-regular">{item.description}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="flex items-center pb-4 rounded-none border-x-0 border-t-0 border-b-gray-200 shadow-none">
      {logo && (
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
      )}
      <div className="w-4/5">
        <ul className="list-none">
          <li className="leading-relaxed pl-6 md:pl-0">
            {title && <p className="quicksand-medium text-md">{title}</p>}
            {subtitle && (
              <p className="quicksand-regular text-sm">{subtitle}</p>
            )}
            {description && (
              <p className="quicksand-regular text-title-sub text-sm">
                {description}
              </p>
            )}
          </li>
        </ul>
      </div>
    </Card>
  );
}
