import { FC } from 'react'
import { PhotoIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

import { ImageInput, ImagePreview } from '@/components/atoms'
import useHooks from './hooks'
import { Dialog } from '@mui/material'
import ImageCrop from '@/components/molucules/ImageCrop'

const ImageField: FC = () => {
  const {
    portfolioImage,
    disabled,
    openCrop,
    photoURL,
    rotation,
    setOpenCrop,
    setRotation,
    setPhotoURL,
    setCroppedAreaPixels,
    handleChange,
  } = useHooks()

  return !openCrop ? (
    <>
      {photoURL ? (
        <Image src={photoURL} width={640} height={328} alt={photoURL} />
      ) : (
        <div>
          {portfolioImage ? (
            <ImagePreview
              height={200}
              width={200}
              {...{ photoURL, handleChange }}
            />
          ) : (
            <ImageInput
              width={640}
              height={328}
              {...{ photoURL, handleChange }}
            />
          )}
        </div>
      )}
    </>
  ) : (
    <Dialog maxWidth='sm' open={openCrop}>
      <ImageCrop
        {...{
          disabled,
          photoURL,
          rotation,
          setOpenCrop,
          setRotation,
          setPhotoURL,
          setCroppedAreaPixels,
        }}
      />
    </Dialog>
  )
}

export default ImageField
