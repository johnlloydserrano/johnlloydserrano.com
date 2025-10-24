import { useQuery } from '@tanstack/react-query';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '../../../amplify/data/resource';
import { AmplifyConfig } from '@/libs/config';
import type { Timeline, TimelineSchema } from '@/models/timelines/types';

export const QUERY_TIMELINE_KEY = 'QUERY_TIMELINE';

AmplifyConfig();

const client = generateClient<Schema>();

const transformTimelineResponse = (timeline: TimelineSchema): Timeline => ({
  id: timeline.id ?? '',
  imageUrl: timeline.imageUrl ?? '',
  title: timeline.title ?? '',
  description: timeline.description ?? '',
  time: timeline.time ?? '',
});

const fetchTimeline = async (): Promise<Timeline[]> => {
  const { data: timelines, errors } = await client.models.Timeline.list();

  if (errors || !timelines) {
    throw new Error('Timelines not found');
  }

  const sortedTimelines = [...timelines].sort((a, b) =>
    a.createdAt.localeCompare(b.createdAt)
  );
  return sortedTimelines.map(transformTimelineResponse);
};

const useQueryTimeline = () => {
  return useQuery<Timeline[], Error>({
    queryKey: [QUERY_TIMELINE_KEY],
    queryFn: fetchTimeline,
    refetchOnWindowFocus: false,
  });
};

export default useQueryTimeline;
