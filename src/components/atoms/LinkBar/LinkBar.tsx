import React from 'react'
import { FC } from 'react'

type Props = {
  readOnly: boolean
  placeholder: string
}

const LinkBar: FC<Props> = React.forwardRef<HTMLInputElement, Props>(
  function LinkBar({ readOnly, placeholder, ...field }, ref) {
    return (
      <input
        type="text"
        className="h-12 w-full rounded-r-lg bg-white px-4 text-xl focus:outline-none"
        {...field}
        ref={ref}
        readOnly={readOnly}
        placeholder={placeholder}
      />
    )
  },
)
export default LinkBar
