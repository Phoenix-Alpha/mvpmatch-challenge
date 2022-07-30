import { memo } from 'react'

import { PaymentDataGrid } from '@/components'

export const ReportPage = memo(() => {
  return (
    <div className='w-full'>
      <div className='flex flex-row items-center justify-between mb-6'>
        <div>
          <h1 className='text-2xl font-bold text-[#011F4B] mb-2'>
            Reports
          </h1>
          <div className='text-[#7E8299] font-medium text-base'>
            Easily generate a report of your transactions
          </div>
        </div>

        <div className='flex flex-row space-x-2'>
          <button>Generate Report</button>
          <button>Generate Report</button>
          <button>Generate Report</button>
          <button>Generate Report</button>
        </div>
      </div>
      <div className='container bg-[#F1FAFE] w-full rounded-lg px-6 py-4'>
        <div className='text-[#011F4B] font-bold mb-8'>All projects | All Gateways</div>
        <PaymentDataGrid />
      </div>
      <div className='container bg-[#F1FAFE] w-full rounded-lg px-6 py-4 text-[#011F4B] font-bold my-8'>
        TOTAL: 14,065 USD
      </div>
    </div>
  )
})

ReportPage.displayName = 'ReportPage'

export default ReportPage
