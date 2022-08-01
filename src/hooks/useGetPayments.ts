import { useQuery } from '@tanstack/react-query'

import { MOCK_PAYMENTS } from '@/mock-api'
import { IReportRequest } from '@/types'
import { getPayments } from '@/utils'

export const useGetPayments = (request: IReportRequest) => {
  // const { isLoading, isError, data, error } = useQuery(['payments'], getPayments)

  return MOCK_PAYMENTS
}
