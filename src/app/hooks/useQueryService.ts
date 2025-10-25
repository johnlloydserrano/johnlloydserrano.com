import { useQuery } from '@tanstack/react-query';
import type { Service, ServiceSchema } from '@/models/services/types';
import { client } from '@/libs/amplifyConfig';

export const QUERY_SERVICE_KEY = 'QUERY_SERVICE';

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
