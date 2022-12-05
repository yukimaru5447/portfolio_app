import Image from 'next/image'
import { FC } from 'react'
import { Stack } from '@mui/material'

type Props = {
  width: number
  height: number
  photoURL: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const ImagePreview: FC<Props> = ({
  width,
  height,
  photoURL,
  handleChange,
}) => {
  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={2}
    >
      <Image
        src={photoURL}
        alt='img'
        style={{ width, height, position: 'relative' }}
      />
      <input
        type='file'
        onChange={(e) => handleChange(e)}
        style={{
          opacity: 0,
          width,
          height,
          position: 'absolute',
        }}
      />
    </Stack>
  )
}

export default ImagePreview
