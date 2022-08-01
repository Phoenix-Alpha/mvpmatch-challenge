import dayjs from 'dayjs'

import {
  IGateway,
  IGatewayCentric,
  IPayment,
  IProject,
  IProjectCentric
} from '@/types'

export const isValidDate = (value: Date | string | undefined): boolean =>
  !!value && dayjs(value).isValid()

export const formatDatetime = (
  value: Date | string | undefined,
  formatStr = 'YYYY-MM-DD'
) => (isValidDate(value) ? dayjs(value).format(formatStr) : null)

export const formatDollar = (value: number): string =>
  new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value) + ' USD'

export const groupPaymentsByProject = (
  items: IPayment[]
): {
  [key: string]: IPayment[]
} =>
  items.reduce(
    (
      result: {
        [key: string]: IPayment[]
      },
      item
    ) => ({
      ...result,
      [item.projectId]: [...(result[item.projectId] || []), item]
    }),
    {}
  )

export const getProjectCentrics = (projects: IProject[], items: IPayment[]) => {
  const results: IProjectCentric[] = []
  const groupedPayments = groupPaymentsByProject(items)
  for (const projectId in groupedPayments) {
    const project = projects.find(item => item.projectId === projectId)
    if (project) {
      results.push({
        project,
        payments: [...groupedPayments[projectId]]
      })
    }
  }
  return results
}

export const groupPaymentsByGateway = (
  items: IPayment[]
): {
  [key: string]: IPayment[]
} =>
  items.reduce(
    (
      result: {
        [key: string]: IPayment[]
      },
      item
    ) => ({
      ...result,
      [item.gatewayId]: [...(result[item.gatewayId] || []), item]
    }),
    {}
  )

export const getGatewayCentrics = (gateways: IGateway[], items: IPayment[]) => {
  const results: IGatewayCentric[] = []
  const groupedPayments = groupPaymentsByGateway(items)
  for (const gatewayId in groupedPayments) {
    const gateway = gateways.find(item => item.gatewayId === gatewayId)
    if (gateway) {
      results.push({
        gateway,
        payments: [...groupedPayments[gatewayId]]
      })
    }
  }
  return results
}
