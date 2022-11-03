import { useEffect, useState } from 'react'

type Props = {
  image: File | null
}

export const useHooks = ({ image }: Props) => {
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
  return { url, isLoading }
}
