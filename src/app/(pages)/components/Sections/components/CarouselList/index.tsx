/* eslint-disable @next/next/no-img-element */
import { Card, CardContent } from '@/app/components/atoms/Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/app/components/atoms/Carousel';
import { Timeline } from '@/models/timelines/types';
import Autoplay from 'embla-carousel-autoplay';

interface CarouselProps {
  achievementData: Timeline[] | null;
}

export default function CarouselList({ achievementData }: CarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full p-4 select-none mb-6"
    >
      <CarouselContent>
        {achievementData?.map((achievement, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="shadow-none p-0 border-none rounded-none">
                <CardContent className="p-0 flex flex-col aspect-square gap-3">
                  <div className="w-full h-[80%] bg-accent/5 border border-accent/10 rounded-t-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={achievement.imageUrl}
                      alt={achievement.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <p className="w-full text-start px-2 space-y-2 pt-4">
                    <span className="quicksand-semibold text-lg line-clamp-1">
                      {achievement.title}
                    </span>
                    <span className="line-clamp-6 text-sm quicksand-regular leading-relaxed">
                      {achievement.description}
                    </span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
