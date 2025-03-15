import {
    TimelineItem,
    TimelineTitle,
    TimelineDescription,
    TimelineTime,
    TimelineHeader,
    TimelineHero,
} from '@/Components/layout/timeline/Timeline';
import { Skeleton } from "@/Components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";

const TimelineSkeleton = () => (
    Array.from({ length: 3 }).map((_, index) => (
        <TimelineItem key={index} className='w-full'>
            <TimelineHeader className='w-full'>
                <TimelineTime>
                    <Skeleton className="bg-white w-24 h-2" />
                </TimelineTime>
                <TimelineHero className='w-full'>
                    <div className="w-full flex">
                        <div className="w-[41%] h-72 flex items-center justify-center mt-1">
                            <Skeleton className="w-full h-full rounded-lg" />
                        </div>
                        <div className="w-[59%] px-6 space-y-6">
                            <TimelineTitle className="text-xl quicksand-semibold">
                                <Skeleton className="w-full h-12" />
                            </TimelineTitle>
                            <TimelineDescription className="whitespace-pre-line text-muted-foreground text-base text-justify quicksand-regular">
                                <Skeleton className="h-32 w-full" />
                            </TimelineDescription>
                        </div>
                    </div>
                </TimelineHero>
            </TimelineHeader>
        </TimelineItem>
    ))
);

const PersonalProjectSkeleton = () => (
    Array.from({ length: 6 }).map((_, index) => (
        <Card className="rounded-md border-none shadow-none" key={index}>
            <CardContent className="p-0">
                <Skeleton className="w-full h-48 rounded-b-none border-x border-t" />
            </CardContent>
            <CardFooter className="border-x border-b p-2 flex flex-col items-start space-y-2">
                <Skeleton className="w-3/4 h-5" />
                <Skeleton className="w-full h-12" />
            </CardFooter>
        </Card>
    ))
);

const EducationAndWorkExperienceSkeleton = () => (
    <div className="space-y-6 w-full">
        {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center gap-4">
                <Skeleton className="w-16 h-14 rounded-full" />
                <div className="flex flex-col space-y-2 w-full">
                    <Skeleton className="w-3/4 h-5" />
                    <Skeleton className="w-1/2 h-4" />
                    <Skeleton className="w-1/3 h-4" />
                </div>
            </div>
        ))}
    </div>
);

const SkillSkeleton = () => (
    <div className="w-full grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-5 py-6">
        {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="rounded-md border shadow-none flex flex-col items-start">
                <Skeleton className="w-full h-32 rounded-md" />
                <Skeleton className="w-9/12 h-4 my-3 mx-2" />
            </div>
        ))}
    </div>
);

const HeroSkeleton = () => (
    <div className="hero-wrapper h-screen relative overflow-hidden select-none">
        <section className="relative container px-24 mx-auto bg-transparent w-full h-full flex items-center">
            <div className="hero-section-box w-full">
                <div className="w-full flex items-start justify-center">
                    <div className="w-1/2 p-6 text-start">
                        <Skeleton className="w-full h-10 sm:h-12 md:h-16 lg:h-20" />
                    </div>
                </div>
                <div className="h-full flex flex-col md:flex-row p-6">
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center mb-8 md:mb-0">
                        <Skeleton className="h-72 sm:h-80 md:h-96 w-72 sm:w-80 md:w-96 rounded-full" />
                        <div className="mt-6 w-full flex justify-center items-center py-6 space-x-6">
                            <Skeleton className="w-[30%] h-12 rounded-md" />
                            <Skeleton className="w-[30%] h-12 rounded-md" />
                        </div>
                    </div>

                    <div className="h-full w-full md:w-1/2 p-4 mt-6">
                        <Skeleton className="w-3/4 h-10 sm:h-12 md:h-14 lg:h-16" />
                        <div className="h-full space-y-4 mt-12">
                            <Skeleton className="w-full py-24 sm:h-7 md:h-8" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);


export {
    TimelineSkeleton,
    PersonalProjectSkeleton,
    EducationAndWorkExperienceSkeleton,
    SkillSkeleton,
    HeroSkeleton,
}