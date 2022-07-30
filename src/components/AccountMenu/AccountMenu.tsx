import classNames from 'classnames'
import { FC, memo, useMemo } from 'react'

import { IUser } from '@/types'

export interface IAccountMenuProps {
  className?: string
}

export const AccountMenu: FC<IAccountMenuProps> = memo(
  ({ className = '' }: IAccountMenuProps) => {
    const account: IUser = {
      userId: "",
      firstName: "John",
      lastName: "Doe",
      email: "example@email.com"
    }

    const initials = useMemo(() => account.firstName?.charAt(0) + account.lastName?.charAt(0), [account])
    
    return (
    <div
      className={classNames("flex flex-row items-center space-x-4", className)}
    >
      <div className='bg-[#F6CA65] w-[43px] h-[43px] text-white text-2xl p-2 rounded flex items-center justify-center'>{initials}</div>
      <span className='text-[#005B96] font-bold text-base'>{account.firstName} {account.lastName}</span>
    </div>
  )
      }
)

AccountMenu.displayName = 'AccountMenu'

export default AccountMenu
