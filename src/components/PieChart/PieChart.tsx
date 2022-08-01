import { ChartData } from 'chart.js'
import { FC, memo } from 'react'
import { Pie } from 'react-chartjs-2'

export interface IPieChartProps {
  className?: string
  data: ChartData<'pie', number[], string>
}

export const PieChart: FC<IPieChartProps> = memo(
  ({ className = '', data }: IPieChartProps) => (
    <div className={className}>
      <Pie data={data} />
    </div>
  )
)

PieChart.displayName = 'PieChart'

export default PieChart
