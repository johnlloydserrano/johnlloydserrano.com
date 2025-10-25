import { useQuery } from '@tanstack/react-query';
import type { SocialLink, SocialLinkSchema } from '@/models/socialLinks/types';
import { client } from '@/libs/amplifyConfig';

export const QUERY_SOCIAL_LINK_KEY = 'QUERY_SOCIAL_LINK';

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
