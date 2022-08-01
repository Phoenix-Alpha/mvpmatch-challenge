import { memo } from 'react'

import { Container, Row } from '@/components'

export const Footer = memo(() => {
  return (
    <footer className='fixed bottom-0 w-full bg-white'>
      <Container className='py-5 !px-0 border-b-2 border-[#F3F6F9]'>
        <Row className='!mx-0 space-x-3 items-center justify-between lg:px-[100px] px-5'>
          <div className='text-base text-[#005B96] font-bold hover:underline cursor-pointer select-none'>
            Terms&Conditions | Privacy policy
          </div>
        </Row>
      </Container>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer
