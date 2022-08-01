import classNames from 'classnames'
import { FC, memo, useMemo } from 'react'

import { useGetUsers } from '@/hooks'
import { IUser } from '@/types'

export interface IAccountMenuProps {
  className?: string
}

export const AccountMenu: FC<IAccountMenuProps> = memo(
  ({ className = '' }: IAccountMenuProps) => {
    const currentUser = useGetUsers()[0]

    const initials = useMemo(
      () => currentUser.firstName?.charAt(0) + currentUser.lastName?.charAt(0),
      [currentUser]
    )

    return (
      <div
        className={classNames(
          'flex flex-row items-center space-x-4',
          className
        )}
      >
        <div className='bg-[#F6CA65] w-[43px] h-[43px] text-white text-2xl p-2 rounded flex items-center justify-center'>
          {initials}
        </div>
        <span className='text-[#005B96] font-bold text-base'>
          {currentUser.firstName} {currentUser.lastName}
        </span>
      </div>
    )
  }
)

AccountMenu.displayName = 'AccountMenu'

export default AccountMenu
