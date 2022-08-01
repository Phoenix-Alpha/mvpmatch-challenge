import { useQuery } from '@tanstack/react-query'

import { MOCK_USERS } from '@/mock-api'
import { getUsers } from '@/utils'

export const useGetUsers = () => {
  // const { isLoading, isError, data, error } = useQuery(['users'], getUsers)

  // console.log(isLoading, isError, data, error)

  return MOCK_USERS
}
