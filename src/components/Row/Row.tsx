import { FC, memo, ReactNode } from 'react'

export interface IRowProps {
  className?: string
  children?: ReactNode
}

export const Row: FC<IRowProps> = memo(
  ({ children, className = '' }: IRowProps) => (
    <div className={`flex flex-wrap -mx-3 ${className}`}>{children}</div>
  )
)

Row.displayName = 'Row'

export default Row
