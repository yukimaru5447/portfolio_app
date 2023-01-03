import { FC } from 'react'
import Box from '@mui/material/Box'

type TabType = 'history' | 'certification'

type Props = {
  children?: React.ReactNode
  tabType: TabType
  value: TabType
}

const TabPanel: FC<Props> = ({ children, value, tabType }) => {
  return (
    <Box
      role='tabpanel'
      hidden={value !== tabType}
      id={tabType}
      aria-labelledby={tabType}
    >
      {value === tabType && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  )
}

export default TabPanel
