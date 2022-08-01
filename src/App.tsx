import './App.scss'
import 'react-datepicker/dist/react-datepicker.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { FC } from 'react'

import { Layout } from '@/components'
import { ReportPage } from '@/pages'

ChartJS.register(ArcElement, Tooltip, Legend)

export const App: FC = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Layout>
          <ReportPage />
        </Layout>
      </div>
    </QueryClientProvider>
  )
}

export default App
