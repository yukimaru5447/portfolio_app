import {
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Slider,
  Button,
} from '@mui/material'
import Cropper from 'react-easy-crop'
import { FC, useState } from 'react'
import getCroppedImg from '../../../utils/cropImage'

type Props = {
  disabled: boolean
  photoURL: string
  rotation: number
  setOpenCrop: any
  setRotation: any
  setPhotoURL: any
  setCroppedAreaPixels: any
}

const ImageCropDialog: FC<Props> = ({ photoURL, setOpenCrop, setPhotoURL }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState<number>(1)
  const [rotation, setRotation] = useState<number>(0)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const cropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  const zoomPercent = (value: any) => {
    return `${Math.round(value * 100)}`
  }

  const cropImage = async () => {
    try {
      const { file, url }: any = await getCroppedImg(
        photoURL,
        croppedAreaPixels,
        rotation,
      )
      setPhotoURL(url)
      setOpenCrop(false)
    } catch (error) {
      console.log(error)
    }
  }

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
              onChange={(e, zoom) => setZoom(Number(zoom))}
            />
          </Box>
          <Box>
            <Typography>回転: {rotation + '°'}</Typography>
            <Slider
              valueLabelDisplay='auto'
              min={0}
              max={360}
              value={rotation}
              onChange={(e, rotation) => setRotation(Number(rotation))}
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
