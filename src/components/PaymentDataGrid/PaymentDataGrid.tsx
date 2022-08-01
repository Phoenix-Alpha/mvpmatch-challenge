import { memo } from 'react'

import { IPayment } from '@/types'
import { formatDollar } from '@/utils'

export interface IPaymentDataGridProps {
  payments: IPayment[]
}

export const PaymentDataGrid = memo(({ payments }: IPaymentDataGridProps) => {
  return (
    <table className='w-full py-4 text-[#011F4B] text-base font-normal px-5 overflow-auto'>
      <thead>
        <tr className='bg-white'>
          <th className='py-2 px-3 lg:px-5 text-left'>Date</th>
          <th className='py-2 px-3 lg:px-5 text-center'>Transaction ID</th>
          <th className='py-2 px-3 lg:px-5 text-right'>Amount</th>
        </tr>
      </thead>
      <tbody>
        {payments.map(payment => (
          <tr className='even:bg-white' key={payment.paymentId}>
            <td className='py-2 px-3 lg:px-5 text-left'>{payment.created}</td>
            <td className='py-2 px-3 lg:px-5 text-center'>
              {payment.paymentId}
            </td>
            <td className='py-2 px-3 lg:px-5 text-right'>
              {formatDollar(payment.amount)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
})

PaymentDataGrid.displayName = 'PaymentDataGrid'

export default PaymentDataGrid
