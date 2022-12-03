import { useCallback, useState } from 'react'
import { Area } from 'react-easy-crop'

const useHooks = () => {
  const [portfolioImage, setPortfolioImage] = useState<File | null>(null)
  const [photoURL, setPhotoURL] = useState<string>('')
  const [rotation, setRotation] = useState<number>(0)
  const [openCrop, setOpenCrop] = useState<boolean>(false)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  })
  const [disabled, setDisabled] = useState<boolean>(false)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.target.files) {
      const file: any = e.target.files[0]
      setPhotoURL(URL.createObjectURL(file))
      setOpenCrop(true)
    }
  }, [])

  return {
    portfolioImage,
    openCrop,
    photoURL,
    disabled,
    rotation,
    setPhotoURL,
    setOpenCrop,
    setRotation,
    setCroppedAreaPixels,
    handleChange,
  }
}

export default useHooks
