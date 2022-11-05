import React, { ComponentPropsWithoutRef, FC } from 'react'

// inputのデフォルトpropsを継承
type ChildProps = ComponentPropsWithoutRef<'input'> & {
  readOnly: boolean
  placeholder: string
}

/**
 * forwardRefでreact-hook-formからrefを渡せるようにする
 *
 * エラー回避のため、名前付き関数
 *
 * https://www.white-space.work/using-react-ref-in-original-compoent/
 */
export const TextField: FC<{ readOnly: boolean; placeholder: string }> =
  React.forwardRef<HTMLInputElement, ChildProps>(function TextField(
    { readOnly, ...fields },
    ref,
  ) {
    return (
      <div className="w-2/3">
        <input
          type="text"
          className="w-full bg-slate-100 py-4 px-2 text-left text-3xl font-semibold focus:outline-none"
          readOnly={readOnly}
          {...fields}
          ref={ref}
        />
      </div>
    )
  })
export default TextField
