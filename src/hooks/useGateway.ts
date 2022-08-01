import { useCallback, useMemo, useState } from 'react'

import { IGatewayCentric } from '@/types'
import { formatDollar } from '@/utils'

export const useGateway = (gatewayCentric: IGatewayCentric) => {
  const [expanded, setExpanded] = useState(false)

  const total = useMemo(() => {
    let sum = 0
    gatewayCentric.payments.forEach(item => {
      sum += item.amount
    })
    return sum
  }, [gatewayCentric])

  const totalFormatted = useMemo(() => formatDollar(total), [total])

  const handleClick = useCallback(() => {
    setExpanded(!expanded)
  }, [expanded, setExpanded])

  return {
    total,
    totalFormatted,
    expanded,
    setExpanded,
    handleClick
  }
}
