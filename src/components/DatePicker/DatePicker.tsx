import classNames from 'classnames'
import {
  ButtonHTMLAttributes,
  createElement,
  DetailedHTMLProps,
  FC,
  forwardRef,
  memo,
  MouseEvent,
  Ref,
  SyntheticEvent,
  useMemo,
  useState
} from 'react'
import ReactDatePicker from 'react-datepicker'

import { formatDatetime } from '@/utils'

export interface IDatePickerProps {
  defaultTitle?: string
  selected?: Date | undefined
  className?: string
  handleChange?: (newValue: Date | null) => void
}

export const DatePicker: FC<IDatePickerProps> = memo(
  ({ defaultTitle, className, selected, handleChange }: IDatePickerProps) => {
    const title = useMemo(
      () => formatDatetime(selected) ?? defaultTitle ?? 'Select date',
      [defaultTitle, selected]
    )

    const onChange = (
      newDate: Date | null,
      event: SyntheticEvent<any, Event> | undefined
    ) => {
      handleChange?.(newDate)
    }

    const DatePickerToggleButton = useMemo(
      () =>
        createElement(
          forwardRef(
            (
              props: DetailedHTMLProps<
                ButtonHTMLAttributes<HTMLButtonElement>,
                HTMLButtonElement
              >,
              ref: Ref<HTMLButtonElement>
            ) => (
              <button
                {...props}
                className={classNames(
                  'datepicker-button whitespace-nowrap',
                  className
                )}
              >
                {title}
              </button>
            )
          )
        ),
      [title]
    )

    return (
      <ReactDatePicker
        selected={selected}
        onChange={onChange}
        customInput={DatePickerToggleButton}
      />
    )
  }
)

DatePicker.displayName = 'DatePicker'

export default DatePicker
