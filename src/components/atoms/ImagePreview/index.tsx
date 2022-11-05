import Image from 'next/image'
import { FC } from 'react'
import Loading from '@/components/atoms/Loading'

import useHooks from './hooks'

type Props = {
  image: File | null
  height: number
  width: number
}

export const ImagePreview: FC<Props> = ({ image, ...props }) => {
  const { isLoading, url } = useHooks({ image })

  if (isLoading) Loading
  if (!image) return null

  return <Image src={url} alt={image.name} {...props} />
}

export default ImagePreview
