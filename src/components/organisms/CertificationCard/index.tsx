import { FC } from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import { styled } from '@mui/material/styles'

import TabPanel from '@/components/atoms/TabPanel'
import { getDateYYYYM } from '@/utils/date'

import { TabType } from '../ProfileDetail'
import { StyledDateColumnBox, StyledDividerBox } from '../HistoryCard'

type Props = {
  certifications:
    | {
        name: string
        startedAt: Date
      }[]
    | undefined
  value: TabType
}

const StyledWorkspacePremiumIcon = styled(WorkspacePremiumIcon)(
  ({ theme }) => ({
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    display: 'block',
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(1),
  }),
)

const CertificationCard: FC<Props> = ({ certifications, value }) => {
  return (
    <Paper elevation={3}>
      <TabPanel value={value} tabType='certification'>
        {certifications &&
          certifications.map(({ name, startedAt }, idx) => {
            return (
              <Box key={name}>
                <Stack direction='row' spacing={1} sx={{ display: 'flex' }}>
                  <StyledDateColumnBox>
                    {getDateYYYYM(startedAt)}
                  </StyledDateColumnBox>
                  <Box>
                    <StyledWorkspacePremiumIcon />

                    <StyledDividerBox
                      idx={idx}
                      rowMaxLength={certifications.length}
                    />
                  </Box>
                  <Box sx={{ paddingTop: '8px' }}>
                    <Stack spacing={2}>
                      <Typography sx={{ fontWeight: 700 }} variant='h5'>
                        {name}
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            )
          })}
      </TabPanel>
    </Paper>
  )
}

export default CertificationCard
