import { useQuery } from '@tanstack/react-query';
import { Hero, HeroSchema } from '@/models/heroes/types';
import { client } from '@/libs/amplifyConfig';

export const QUERY_HERO_KEY = 'QUERY_HERO_KEY';

const transformHeroResponse = (hero: HeroSchema): Hero => ({
  id: hero.id ?? '',
  name: hero.name ?? '',
  imageUrl: hero.imageUrl ?? '',
  headline: hero.headline ?? '',
  paragraphs: Array.isArray(hero.paragraphs)
    ? hero.paragraphs
    : hero.paragraphs
      ? JSON.parse(hero.paragraphs as string)
      : [],
});

const fetchHero = async (): Promise<Hero> => {
  const { data: heroes, errors } = await client.models.Hero.list();

  if (errors || !heroes || heroes.length === 0) {
    throw new Error('Hero not found');
  }

  return transformHeroResponse(heroes[0]);
};

const useQueryHero = () => {
  return useQuery<Hero, Error>({
    queryKey: [QUERY_HERO_KEY],
    queryFn: fetchHero,
    refetchOnWindowFocus: false,
  });
};

export default useQueryHero;
