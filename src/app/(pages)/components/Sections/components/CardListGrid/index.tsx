import { Card, CardContent, CardFooter } from '@/app/components/atoms/Card';
import { CardListGrid } from '@/models/cards/types';
import Link from 'next/link';

interface CardListGridsProps {
  data: CardListGrid[];
  withDescription?: boolean;
  withLink?: boolean;
  linkRoute?: (slug: string) => string;
  gridClasses?: string;
  cardContentClass?: string;
}

export const CardListGrids = ({
  data,
  withDescription = false,
  withLink = false,
  linkRoute,
  gridClasses = 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  cardContentClass = '',
}: CardListGridsProps) => {
  return (
    <div className={`w-full grid gap-4 p-4 py-6 ${gridClasses}`}>
      {data.map((item, index) => {
        const card = (
          <Card
            key={index}
            className={`rounded-md border shadow-none ${
              withDescription ? 'bg-white' : 'bg-transparent border-none'
            }`}
          >
            <CardContent className={`p-0 ${cardContentClass}`}>
              <div
                className={`${
                  withDescription
                    ? 'h-64 rounded-t-md bg-cover'
                    : 'h-24 bg-contain'
                } w-full bg-center bg-no-repeat`}
                style={{ backgroundImage: `url(${item.imageUrl})` }}
                role="img"
                aria-label={`${item.name} logo`}
              />
            </CardContent>
            {withDescription && (
              <CardFooter className="p-2 flex flex-col items-start space-y-2">
                <p className="text-md quicksand-semibold text-lg">
                  {item.name}
                </p>
                <p className="text-md quicksand-regular text-sm">
                  {item.description}
                </p>
              </CardFooter>
            )}
          </Card>
        );

        return withLink && item.slug && linkRoute ? (
          <Link
            href={linkRoute(item.slug)}
            key={index}
            className="rounded-md hover:opacity-90 transition"
          >
            {card}
          </Link>
        ) : (
          card
        );
      })}
    </div>
  );
};
