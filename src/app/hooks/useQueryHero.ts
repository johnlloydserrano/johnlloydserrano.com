import { useQuery } from '@tanstack/react-query';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '../../../amplify/data/resource';
import { Hero, HeroSchema } from '@/models/heroes/types';

export const QUERY_HERO_KEY = 'QUERY_HERO_KEY';

const client = generateClient<Schema>();

const transformHeroResponse = (hero: HeroSchema): Hero => ({
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
