import { useQuery } from "@tanstack/react-query"

import { getUsers } from "@/utils"

export const useGetUsers = () => {
  const { isLoading, isError, data, error } = useQuery(['users'], getUsers)

  console.log(isLoading, isError, data, error)

  return []
}
