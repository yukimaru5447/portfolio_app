import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/system'

import Loading from '@/components/atoms/Loading'
import PortfolioCard from '@/components/organisms/PortfolioCard'
import SearchBlock from '@/components/organisms/SearchBlock'

import useHooks from './hooks'

const StyledGridTable = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: theme.spacing(2.5),
  marginBottom: theme.spacing(2.5),
}))

const StyledGridRow = styled(Box)(() => ({
  width: '66%',
}))

const StyledGridLabel = styled(Typography)(() => ({
  fontWeight: 700,
}))

const Home: FC = () => {
  const { isLoading, error, portfolioGridRows } = useHooks()

  if (isLoading) return <Loading />
  if (error) <p>{error.message}</p>

  return (
    <>
      <SearchBlock />
      <StyledGridTable>
        {portfolioGridRows &&
          portfolioGridRows.map((grid) => (
            <StyledGridRow key={grid.label}>
              <StyledGridLabel variant='h5'>{grid.label}</StyledGridLabel>
              <Swiper
                spaceBetween={315}
                slidesPerView={3}
                navigation={true}
                modules={[Navigation]}
              >
                {grid.rows &&
                  grid.rows.map(
                    ({ id, title }: { id: string; title: string }) => (
                      <SwiperSlide key={id}>
                        <PortfolioCard id={id} title={title} />
                      </SwiperSlide>
                    ),
                  )}
              </Swiper>
            </StyledGridRow>
          ))}
      </StyledGridTable>
    </>
  )
}

export default Home
