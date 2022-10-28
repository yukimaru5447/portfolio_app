import { FC } from 'react'

type Props = {
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
  className: string
}

export const ImageInput: FC<Props> = ({ onChange, ...props }) => {
  return <input type="file" name="image" onChange={onChange} {...props} />
}
