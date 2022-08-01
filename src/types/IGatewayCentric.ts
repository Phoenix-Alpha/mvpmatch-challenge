import { IGateway, IPayment } from '@/types'

export interface IGatewayCentric {
  gateway: IGateway
  payments: IPayment[]
}
