import { useCallback, useMemo, useState } from 'react'

import { IProjectCentric } from '@/types'
import { formatDollar } from '@/utils'

export const useProject = (projectCentric: IProjectCentric) => {
  const [expanded, setExpanded] = useState(false)

  const total = useMemo(() => {
    let sum = 0
    projectCentric.payments.forEach(item => {
      sum += item.amount
    })
    return sum
  }, [projectCentric])

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
