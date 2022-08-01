import { MOCK_PROJECTS } from '@/mock-api'

export const useGetProjects = () => {
  // const { isLoading, isError, data, error } = useQuery(['projects'], getProjects)

  return MOCK_PROJECTS
}
