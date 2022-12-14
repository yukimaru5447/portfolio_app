import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'
import Button from '@mui/material/Button'
import Cropper, { Area } from 'react-easy-crop'
import { Dispatch, FC, SetStateAction } from 'react'

import useHooks from './hooks'

type Props = {
  photoURL: string
  rotation: number
  setOpenCrop: Dispatch<SetStateAction<boolean>>
  setRotation: Dispatch<SetStateAction<number>>
  setPhotoURL: Dispatch<SetStateAction<string>>
  setCroppedAreaPixels: Dispatch<SetStateAction<Area>>
}

const ImageCropDialog: FC<Props> = ({ photoURL, setOpenCrop, setPhotoURL }) => {
  const {
    crop,
    zoom,
    rotation,
    cropImage,
    zoomPercent,
    cropComplete,
    setCrop,
    setZoom,
    setRotation,
  } = useHooks({
    photoURL,
    setOpenCrop,
    setPhotoURL,
  })
  return (
    <>
      <DialogContent
        dividers
        sx={{
          background: '#333',
          position: 'relative',
          height: 400,
          width: 'auto',
          minWidth: { sm: 500 },
        }}
      >
        <Cropper
          image={photoURL}
          crop={crop}
          zoom={zoom}
          rotation={rotation}
          aspect={2}
          onZoomChange={setZoom}
          onCropChange={setCrop}
          onCropComplete={cropComplete}
        />
      </DialogContent>
      <DialogActions sx={{ flexDirection: 'column', mx: 3, my: 2 }}>
        <Box sx={{ width: '100%', mb: 1 }}>
          <Box>
            <Typography>ズーム: {zoomPercent(zoom)}</Typography>
            <Slider
              valueLabelDisplay='auto'
              valueLabelFormat={zoomPercent}
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(_, zoom) => setZoom(Number(zoom))}
            />
          </Box>
          <Box>
            <Typography>回転: {rotation + '°'}</Typography>
            <Slider
              valueLabelDisplay='auto'
              min={0}
              max={360}
              value={rotation}
              onChange={(_, rotation) => setRotation(Number(rotation))}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <Button variant='outlined' onClick={() => setOpenCrop(false)}>
            キャンセル
          </Button>
          <Button variant='contained' onClick={cropImage}>
            トリミング
          </Button>
        </Box>
      </DialogActions>
    </>
  )
}

export default ImageCropDialog
