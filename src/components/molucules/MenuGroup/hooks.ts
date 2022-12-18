import { useState, MouseEvent } from 'react'

const useHooks = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const open = !!anchorEl
  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  return { open, handleOpenMenu, handleCloseMenu, anchorEl }
}

export default useHooks
