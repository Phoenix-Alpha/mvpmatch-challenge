import { memo } from 'react'

import {
  DatePicker,
  Gateway,
  PaymentDataGrid,
  Project,
  Select
} from '@/components'
import { useReportPage } from '@/hooks'

export const ReportPage = memo(() => {
  const {
    mode,
    title,
    totalFormatted,
    projects,
    gateways,
    isEmpty,
    fromDate,
    toDate,
    payments,
    projectCentrics,
    gatewayCentrics,
    handleChangeProject,
    handleChangeGateway,
    handleChangeFromDate,
    handleChangeToDate,
    handleClickGenerateReport
  } = useReportPage()

  return (
    <div className='w-full mb-10 lg:mb-20 px-5 lg:px-0'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6'>
        <div>
          <h1 className='text-2xl font-bold text-[#011F4B] mb-2'>Reports</h1>
          <div className='text-[#7E8299] font-medium text-base mb-2'>
            Easily generate a report of your transactions
          </div>
        </div>

        <div className='flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0'>
          <Select
            className='bg-[#1BC5BD] rounded-md text-base text-white'
            onChange={handleChangeProject}
          >
            <option>All projects</option>
            {projects.map(item => (
              <option value={item.projectId} key={item.projectId}>
                {item.name}
              </option>
            ))}
          </Select>

          <Select
            className='bg-[#1BC5BD] rounded-md text-base text-white'
            onChange={handleChangeGateway}
          >
            <option>All gateways</option>
            {gateways.map(item => (
              <option value={item.gatewayId} key={item.gatewayId}>
                {item.name}
              </option>
            ))}
          </Select>

          <DatePicker
            selected={fromDate}
            defaultTitle='From date'
            className='!bg-[#1BC5BD] rounded-md text-base text-white'
            handleChange={handleChangeFromDate}
          />

          <DatePicker
            selected={toDate}
            defaultTitle='To date'
            className='!bg-[#1BC5BD] rounded-md text-base text-white'
            handleChange={handleChangeToDate}
          />

          <button
            className='bg-[#005B96] rounded-md text-base text-white whitespace-nowrap px-4 py-2'
            onClick={handleClickGenerateReport}
          >
            Generate Report
          </button>
        </div>
      </div>
      {isEmpty ? (
        <div className='container w-full min-h-[70vh] px-6 py-4 flex flex-col items-center justify-center'>
          <div className='lg:max-w-md'>
            <div className='text-2xl font-bold text-[#011F4B] mb-2 text-center'>
              No reports
            </div>
            <div className='text-[#7E8299] font-medium text-base mb-5 lg:mb-10 text-center'>
              Currently you have no data for the reports to be generated. Once
              you start generating traffic through the Balance application the
              reports will be shown.
            </div>
            <img src='/images/empty.png' />
          </div>
        </div>
      ) : (
        <>
          <div className='container bg-[#F1FAFE] w-full rounded-lg px-6 py-4'>
            <div className='text-[#011F4B] font-bold mb-8'>{title}</div>
            {mode === 'project-centric' && (
              <>
                {projectCentrics.map(item => (
                  <Project projectCentric={item} key={item.project.projectId} />
                ))}
              </>
            )}
            {mode === 'gateway-centric' && (
              <>
                {gatewayCentrics.map(item => (
                  <Gateway gatewayCentric={item} key={item.gateway.gatewayId} />
                ))}
              </>
            )}
            {mode === 'payment-centric' && (
              <>
                <PaymentDataGrid payments={payments} />
              </>
            )}
          </div>
          <div className='container bg-[#F1FAFE] w-full rounded-lg px-6 py-4 text-[#011F4B] font-bold my-8'>
            {totalFormatted}
          </div>
        </>
      )}
    </div>
  )
})

ReportPage.displayName = 'ReportPage'

export default ReportPage
