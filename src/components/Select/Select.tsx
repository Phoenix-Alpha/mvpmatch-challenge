import { FC, memo, ReactNode, SelectHTMLAttributes } from 'react'

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string
  children?: ReactNode
}

export const Select: FC<ISelectProps> = memo(
  ({ children, className = '', ...props }: ISelectProps) => (
    <select className={className} {...props}>
      {children}
    </select>
  )
)

Select.displayName = 'Select'

export default Select
