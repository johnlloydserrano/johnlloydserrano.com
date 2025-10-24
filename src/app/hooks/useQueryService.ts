import { useQuery } from '@tanstack/react-query';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '../../../amplify/data/resource';
import { AmplifyConfig } from '@/libs/config';
import type { Service, ServiceSchema } from '@/models/services/types';

export const QUERY_SERVICE_KEY = 'QUERY_SERVICE';

AmplifyConfig();

const client = generateClient<Schema>();

const transformServiceResponse = (service: ServiceSchema): Service => ({
  id: service.id ?? '',
  description: service.description ?? '',
});

const fetchService = async (): Promise<Service[]> => {
  const { data: services, errors } = await client.models.Service.list();

  if (errors || !services) {
    throw new Error('Services not found');
  }

  const sortedServices = [...services].sort((a, b) =>
    a.createdAt.localeCompare(b.createdAt)
  );
  return sortedServices.map(transformServiceResponse);
};

const useQueryService = () => {
  return useQuery<Service[], Error>({
    queryKey: [QUERY_SERVICE_KEY],
    queryFn: fetchService,
    refetchOnWindowFocus: false,
  });
};

export default useQueryService;
