import {
    Timeline,
    TimelineItem,
    TimelineTitle,
    TimelineDescription,
    TimelineTime,
    TimelineHeader,
    TimelineHero,
} from '@/Components/layout/timeline/Timeline';

interface Props {
    timelineData: Timeline[];
}

export default function TimelineLayout({ timelineData }: Props) {
    return (
        <Timeline className='pt-6 px-4'>
            {timelineData.map((timeline, index) => (
                <TimelineItem key={index}>
                    <TimelineHeader>
                        <TimelineTime>{timeline.time}</TimelineTime>
                        <TimelineHero>
                            <div className='w-full flex'>
                                <div className='w-[41%] h-72 flex item-center justify-center mt-1'>
                                    <img src={timeline.imageUrl} className="h-full w-full object-cover rounded-lg" alt={`${timeline.title} image`} />
                                </div>
                                <div className='w-[59%] px-6 space-y-6'>
                                    <TimelineTitle className='text-xl quicksand-semibold'>{timeline.title}</TimelineTitle>
                                    <TimelineDescription className="whitespace-pre-line text-muted-foreground text-base text-justify quicksand-regular">
                                        {timeline.description.replace(/<br\s*\/?>/g, '\n')}
                                    </TimelineDescription>
                                </div>
                            </div>
                        </TimelineHero>
                    </TimelineHeader>
                </TimelineItem>
            ))}
        </Timeline>
    );
};