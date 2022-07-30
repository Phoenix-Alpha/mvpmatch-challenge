import { memo } from 'react'

import { MenuIcon1, MenuIcon2, MenuIcon3, MenuIcon4, MenuIcon5 } from '@/components'

export const SideMenu = memo(() => {
  return (
    <div className='flex flex-col w-[100px] items-center space-y-8 py-10'>
      <MenuIcon1 />
      <MenuIcon2 />
      <MenuIcon3 />
      <MenuIcon4 />
      <MenuIcon5 />
    </div>
  )
})

SideMenu.displayName = 'SideMenu'

export default SideMenu
