import React, { ComponentPropsWithoutRef, FC } from 'react'

type ChildProps = ComponentPropsWithoutRef<'input'> & {
  readOnly: boolean
  placeholder: string
}

export const TextField: FC<ChildProps> = React.forwardRef<
  HTMLInputElement,
  ChildProps
>(function TextField({ readOnly, placeholder, ...fields }, ref) {
  return (
    <div className="w-2/3">
      <input
        type="text"
        className="w-full bg-slate-100 py-4 px-2 text-left text-3xl font-semibold focus:outline-none"
        {...fields}
        ref={ref}
        readOnly={readOnly}
        placeholder={placeholder}
      />
    </div>
  )
})
export default TextField
