import { FC, memo } from 'react'

import { PaymentDataGrid } from '@/components'
import { useGateway } from '@/hooks'
import { IGatewayCentric } from '@/types'

export interface IGatewayProps {
  gatewayCentric: IGatewayCentric
}

export const Gateway: FC<IGatewayProps> = memo(
  ({ gatewayCentric }: IGatewayProps) => {
    const { totalFormatted, expanded, handleClick } = useGateway(gatewayCentric)

    return (
      <div className='w-full'>
        <div
          className='bg-white p-6 text-[#011F4B] text-base font-bold rounded-lg cursor-pointer select-none z-10 mb-4 flex flex-row items-center justify-between'
          onClick={handleClick}
        >
          <span>{gatewayCentric.gateway.name}</span>
          <span>TOTAL: {totalFormatted}</span>
        </div>
        {expanded && <PaymentDataGrid payments={gatewayCentric.payments} />}
      </div>
    )
  }
)

Gateway.displayName = 'Gateway'

export default Gateway
