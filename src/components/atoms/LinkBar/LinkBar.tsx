import React from 'react'
import { FC } from 'react'

type Props = {
  label: string
  readOnly: boolean
  placeholder: string
}

const LinkBar: FC<Props> = React.forwardRef<HTMLInputElement, Props>(
  function LinkBar({ label, readOnly, placeholder, ...field }, ref) {
    return (
      <div className="flex w-2/3">
        <div className="text-ms flex h-12 w-28 items-center justify-center rounded-l-lg  bg-slate-300 text-center font-semibold text-white">
          {label}
        </div>
        <input
          type="text"
          className="h-12 w-full rounded-r-lg bg-white px-4 text-xl focus:outline-none"
          {...field}
          ref={ref}
          readOnly={readOnly}
          placeholder={placeholder}
        />
      </div>
    )
  },
)
export default LinkBar
