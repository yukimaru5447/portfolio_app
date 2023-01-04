import { FC } from 'react'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import SchoolIcon from '@mui/icons-material/School'
import { styled } from '@mui/material/styles'

import TabPanel from '@/components/atoms/TabPanel'
import { getDateYYYYM } from '@/utils/date'

import { TabType } from '../ProfileDetail'

type Props = {
  histories:
    | {
        name: string
        startedAt: Date
        endedAt: Date
        description: string
      }[]
    | undefined
  value: TabType
}

export const StyledDateColumnBox = styled(Box)(({ theme }) => ({
  fontSize: 16,
  color: 'grey',
  textAlign: 'end',
  paddingTop: theme.spacing(1),
  width: '88px',
}))

export const StyledDividerBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'rowMaxLength',
})<{
  idx: number
  rowMaxLength: number
}>(({ idx, rowMaxLength }) => ({
  minHeight: 50,
  marginLeft: '26px',
  marginRight: '16px',
  borderLeft: idx === rowMaxLength - 1 ? '' : '3px solid grey',
}))

const StyledSchoolIcon = styled(SchoolIcon)(({ theme }) => ({
  width: '52px',
  height: '52px',
  borderRadius: '50%',
  display: 'block',
  backgroundColor: theme.palette.primary.light,
  padding: theme.spacing(1),
}))

const HistoryCard: FC<Props> = ({ histories, value }) => {
  return (
    <Paper elevation={3}>
      <TabPanel value={value} tabType='history'>
        <Divider orientation='vertical' />

        {histories
          ? histories.map(({ description, name, startedAt, endedAt }, idx) => {
              return (
                <Box key={name}>
                  <Stack direction='row' spacing={1} sx={{ display: 'flex' }}>
                    <StyledDateColumnBox>
                      {getDateYYYYM(endedAt)}
                      <br />-<br />
                      {getDateYYYYM(startedAt)}
                    </StyledDateColumnBox>
                    <Box>
                      <StyledSchoolIcon />

                      <StyledDividerBox
                        idx={idx}
                        rowMaxLength={histories.length}
                      />
                    </Box>
                    <Box sx={{ paddingTop: '8px' }}>
                      <Stack spacing={2}>
                        <Typography sx={{ fontWeight: 700 }} variant='h5'>
                          {name}
                        </Typography>

                        <Typography>{description}</Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
              )
            })
          : null}
      </TabPanel>
    </Paper>
  )
}

export default HistoryCard
