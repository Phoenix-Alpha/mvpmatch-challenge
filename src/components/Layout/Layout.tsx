import { memo, ReactNode } from 'react'

import { Footer, Header, SideMenu } from '@/components'

export interface ILayoutProps {
  children?: ReactNode
}

export const Layout = memo(({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      <main className='container max-w-[1440px] mx-auto flex flex-row'>
        <SideMenu />
        <div className='flex flex-grow py-8 pr-5 lg:pr-[100px]'>{children}</div>
      </main>
      <Footer />
    </>
  )
})

Layout.displayName = 'Layout'

export default Layout
