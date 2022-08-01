import { memo } from 'react'

import { AccountMenu, Container, HamburgerIcon, Logo, Row } from '@/components'

export const Header = memo(() => {
  return (
    <header>
      <Container className='py-5 !px-0 border-b-2 border-[#F3F6F9]'>
        <Row className='!mx-0 space-x-3 items-center justify-between lg:pr-[100px] pr-5'>
          <Row className='!mx-0 space-x-3 items-center'>
            <Row className='!mx-0 space-x-3 items-center w-[100px] justify-center'>
              <Logo />
            </Row>
            <HamburgerIcon />
          </Row>
          <AccountMenu />
        </Row>
      </Container>
    </header>
  )
})

Header.displayName = 'Header'

export default Header
