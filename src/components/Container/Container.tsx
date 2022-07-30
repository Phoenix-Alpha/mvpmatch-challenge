import classNames from 'classnames'
import { FC, memo, ReactNode } from 'react'

export interface IContainerProps {
  className?: string
  children?: ReactNode
  role?: string
}

export const Container: FC<IContainerProps> = memo(
  ({ children, className = '', ...props }: IContainerProps) => (
    <div
      className={classNames(
        'container px-3 max-w-[1440px] mx-auto',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)

Container.displayName = 'Container'

export default Container
