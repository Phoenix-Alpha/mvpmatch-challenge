import './App.scss'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { FC } from 'react'

import { Layout } from '@/components'
import { ReportPage } from '@/pages'

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
