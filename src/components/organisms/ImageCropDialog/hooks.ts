import { Area } from 'react-easy-crop'
import { Dispatch, SetStateAction, useState } from 'react'
import getCroppedImg from '@/utils/cropImage'

type Props = {
  photoURL: string
  setOpenCrop: Dispatch<SetStateAction<boolean>>
  setPhotoURL: Dispatch<SetStateAction<string>>
}

const useHooks = ({ photoURL, setOpenCrop, setPhotoURL }: Props) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState<number>(1)
  const [rotation, setRotation] = useState<number>(0)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>({
    x: 0,
    y: 0,
    height: 0,
    width: 0,
  })

  const cropComplete = (croppedArea: any, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  const zoomPercent = (value: any) => {
    return `${Math.round(value * 100)}`
  }

  const cropImage = async () => {
    try {
      const CroppedImg: { url: string } | null = await getCroppedImg(
        photoURL,
        croppedAreaPixels,
        rotation,
      )
      if (!CroppedImg) return alert('イメージのアップロードに失敗しました')

      setPhotoURL(CroppedImg.url)
      setOpenCrop(false)
    } catch (error) {
      console.log(error)
    }
  }
  return {
    crop,
    zoom,
    rotation,
    cropImage,
    zoomPercent,
    cropComplete,
    setCrop,
    setZoom,
    setRotation,
  }
}

export default useHooks
