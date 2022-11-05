import { FC } from 'react'
import ButtonUnstyled from '@mui/base/ButtonUnstyled'

type Props = {
  name: string
  type: 'submit' | 'button'
}

const Button: FC<Props> = ({ name, type }) => {
  return (
    <ButtonUnstyled
      type={type}
      className="my-4 mr-6 rounded-md bg-slate-500 px-4 py-2 text-sm font-medium text-white hover:bg-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      {name}
    </ButtonUnstyled>
  )
}
export default Button
