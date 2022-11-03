import React, { FC } from 'react'

type ButtonProps = {
  name: string
}

const Button: FC<ButtonProps> = (props) => {
  const { name } = props
  return (
    <button className="my-4 mr-6 rounded-md bg-slate-500 px-4 py-2 text-sm font-medium text-white hover:bg-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
      {name}
    </button>
  )
}
export default Button
