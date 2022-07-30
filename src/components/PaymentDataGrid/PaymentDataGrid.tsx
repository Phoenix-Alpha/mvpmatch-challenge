import { memo } from 'react'

export interface IPaymentDataGridProps {
  title?: string
}

export const PaymentDataGrid = memo(() => {
  return <div>PaymentDataGrid</div>
})

PaymentDataGrid.displayName = 'PaymentDataGrid'

export default PaymentDataGrid
