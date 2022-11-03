import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

type ImagePreviewProps = {
  image: File | null
  height: number
  width: number
}

export const ImagePreview: FC<ImagePreviewProps> = ({ image, ...props }) => {
  const [url, setUrl] = useState<string>('')
  const isLoading = image && !url

  useEffect(() => {
    if (!image) {
      return
    }

    let reader: FileReader | null = new FileReader()
    reader.onloadend = () => {
      const res = reader?.result
      if (res && typeof res === 'string') {
        setUrl(res)
      }
    }
    reader.readAsDataURL(image)

    return () => {
      reader = null
    }
  }, [image])

  return image ? (
    isLoading ? (
      <>ローディング中...</>
    ) : (
      <Image src={url} alt={image.name} {...props} />
    )
  ) : null
}

export default ImagePreview
