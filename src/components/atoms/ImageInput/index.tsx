import { FC } from 'react'

type Props = {
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
  className: string
  [props: string]: any
}

const ImageInput: FC<Props> = ({ onChange, ...props }) => {
  return <input type='file' name='image' onChange={onChange} {...props} />
}

export default ImageInput
