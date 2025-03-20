import {
    Timeline,
    TimelineItem,
    TimelineTitle,
    TimelineDescription,
    TimelineTime,
    TimelineHeader,
    TimelineHero,
} from "@/Components/ui/timeline";
import { TimelineSkeleton } from "@/Components/layout/HomeSkeleton";

interface TimelineProps {
    timelineData: Timeline[];
    isLoading: boolean;
}

export function TimelineLayout({ timelineData, isLoading }: TimelineProps) {
    return (
        <Timeline className="pt-6 px-4 w-full">
            {isLoading ? (
                <TimelineSkeleton />
            ) : (
                timelineData.map((timeline, index) => (
                    <TimelineItem key={index}>
                        <TimelineHeader>
                            <TimelineTime>{timeline.time}</TimelineTime>
                            <TimelineHero>
                                <div className="w-full flex">
                                    <div className="w-[41%] h-72 flex items-center justify-center mt-1">
                                        <img
                                            src={timeline.imageUrl}
                                            className="h-full w-full object-cover rounded-lg"
                                            alt={`${timeline.title} image`}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="w-[59%] px-6 space-y-6">
                                        <TimelineTitle className="text-xl quicksand-semibold">{timeline.title}</TimelineTitle>
                                        <TimelineDescription className="whitespace-pre-line text-muted-foreground text-base text-justify quicksand-regular">
                                            {timeline.description.replace(/<br\s*\/?\>/g, "\n")}
                                        </TimelineDescription>
                                    </div>
                                </div>
                            </TimelineHero>
                        </TimelineHeader>
                    </TimelineItem>
                ))
            )}
        </Timeline>
    );
}