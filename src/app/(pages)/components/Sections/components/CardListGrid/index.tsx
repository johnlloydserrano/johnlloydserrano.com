import { Button } from '@/app/components/atoms/Button';
import { Card, CardContent, CardFooter } from '@/app/components/atoms/Card';
import { CardListGrid } from '@/models/cards/types';
import { MousePointerClick } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

interface CardListGridsProps {
  data: CardListGrid[] | null;
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
  const { t } = useTranslation();

  return (
    <div className={`w-full grid gap-4 p-4 py-6 ${gridClasses}`}>
      {data?.map((item, index) => {
        const card = (
          <div className="relative group">
            <Card
              className={`rounded-md border border-foreground/10 shadow-none ${
                withDescription
                  ? 'bg-white hover:border-primary'
                  : 'bg-transparent border-none'
              }`}
            >
              <CardContent className={`p-0 ${cardContentClass}`}>
                <div
                  className={`${
                    withDescription
                      ? 'h-60 rounded-t-md bg-contain bg-[#FFEEEA]'
                      : 'h-24 bg-contain'
                  } w-full bg-center bg-no-repeat`}
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                  role="img"
                  aria-label={`${item.name} logo`}
                />
              </CardContent>
              {withDescription && (
                <>
                  <CardFooter className="p-2 flex flex-col items-start space-y-2">
                    <p className="text-md quicksand-semibold text-lg">
                      {item.name}
                    </p>
                    <p className="text-md quicksand-regular text-sm">
                      {item.description}
                    </p>
                  </CardFooter>

                  {item.productHunt && (
                    <div className="py-4">
                      <div className="flex justify-center items-center rounded-md">
                        <div className="w-1/3 flex flex-col items-center justify-center gap-y-1 border-r">
                          <div className="relative w-10 h-10">
                            <Image
                              src={item.productHunt.logoUrl}
                              alt={`${item.productHunt.title} Logo`}
                              fill
                              className="object-contain select-none pointer-events-none"
                              priority
                            />
                          </div>
                          <p className="text-xs font-bold color-effect">
                            {item.productHunt.title}
                          </p>
                        </div>
                        <div className="w-2/3 px-6">
                          <p className="text-[10px] font-acorn color-effect">
                            {t('productHunt.position')}
                          </p>
                          <p className="text-lg font-acorn font-bold color-effect leading-tight">
                            {item.productHunt.position} {t('productHunt.outOf')}{' '}
                            {item.productHunt.totalLaunches}
                          </p>
                          <p className="text-[10px] text-gray-600 font-semibold font-acorn color-effect">
                            {t('productHunt.launchedOn')}{' '}
                            {item.productHunt.launchDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </Card>
            {withDescription && (
              <div className="absolute inset-0 bg-foreground/65 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
                <Button
                  className="w-auto px-6 py-3 relative overflow-hidden hover:bg-transparent"
                  variant="ghost"
                >
                  <span className="text-sm relative z-10 flex items-center gap-2 select-none text-white">
                    <MousePointerClick />
                    View Details
                  </span>
                </Button>
              </div>
            )}
          </div>
        );

        return withLink && item.slug && linkRoute ? (
          <Link
            href={linkRoute(item.slug)}
            key={item.slug || index}
            className="rounded-md hover:opacity-90 transition"
          >
            {card}
          </Link>
        ) : (
          <div key={item.name || index}>{card}</div>
        );
      })}
    </div>
  );
};
