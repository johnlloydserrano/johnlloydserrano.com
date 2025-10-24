import { useQuery } from '@tanstack/react-query';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '../../../amplify/data/resource';
import { AmplifyConfig } from '@/libs/config';
import type { SocialLink, SocialLinkSchema } from '@/models/socialLinks/types';

export const QUERY_SOCIAL_LINK_KEY = 'QUERY_SOCIAL_LINK';

AmplifyConfig();

const client = generateClient<Schema>();

const transformSocialLinkResponse = (link: SocialLinkSchema): SocialLink => ({
  id: link.name ?? '',
  name: link.name ?? '',
  imageUrl: link.imageUrl ?? '',
  url: link.url ?? '',
});

const fetchSocialLink = async (): Promise<SocialLink[]> => {
  const { data: links, errors } = await client.models.SocialLink.list();

  if (errors || !links) {
    throw new Error('Social links not found');
  }

  const sortedLinks = [...links].sort((a, b) =>
    a.createdAt.localeCompare(b.createdAt)
  );
  return sortedLinks.map(transformSocialLinkResponse);
};

const useQuerySocialLink = () => {
  return useQuery<SocialLink[], Error>({
    queryKey: [QUERY_SOCIAL_LINK_KEY],
    queryFn: fetchSocialLink,
    refetchOnWindowFocus: false,
  });
};

export default useQuerySocialLink;
