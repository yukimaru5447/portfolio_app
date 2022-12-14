import PhotoIcon from '@heroicons/react/24/outline/PhotoIcon'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import { FC } from 'react'

type Props = {
  width: number
  height: number
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ImageInput: FC<Props> = ({ width, height, handleChange }) => {
  return (
    <Tooltip title='画像アップロード'>
      <IconButton
        sx={{
          display: 'flex',
          alignItems: 'center',
          width,
          height,
          borderRadius: 2,
          backgroundColor: 'grey',
          '&:hover': {
            backgroundColor: 'grey',
            opacity: [0.9, 0.8, 0.7],
          },
          position: 'relative',
        }}
      >
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 25,
            height: 25,
            borderRadius: 2,
          }}
        >
          <PhotoIcon />
        </Box>
      </IconButton>
    </Tooltip>
  )
}

export default ImageInput
