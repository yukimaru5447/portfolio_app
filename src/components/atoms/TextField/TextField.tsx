import React, { FC } from 'react'

type Props = {
  readOnly: boolean
  placeholder: string
}

export const TextField: FC<Props> = React.forwardRef<HTMLInputElement, Props>(
  function TextField({ readOnly, placeholder, ...fields }, ref) {
    return (
      <input
        type="text"
        className="w-full bg-slate-100 py-4 px-2 text-left text-3xl font-semibold focus:outline-none"
        {...fields}
        ref={ref}
        readOnly={readOnly}
        placeholder={placeholder}
      />
    )
  },
)
export default TextField
