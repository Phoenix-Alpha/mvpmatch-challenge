import { IPayment, IProject } from '@/types'

export interface IProjectCentric {
  project: IProject
  payments: IPayment[]
}
