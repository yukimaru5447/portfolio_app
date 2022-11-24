import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

import { PortfolioCard } from '@/components/organisms'
import useHooks from './hooks'
import { Loading } from '@/components/atoms'

const Home: FC = () => {
  const { isLoading, error, portfolioGridRows } = useHooks()

  if (isLoading) return <Loading />
  if (error) <p>{error.message}</p>

  return (
    <>
      {portfolioGridRows &&
        portfolioGridRows.map((grid) => (
          <div
            key={grid.label}
            className='flex w-4/6 flex-col items-center justify-center'
          >
            <div className='w-full  text-2xl font-bold text-gray-600'>
              {grid.label}
            </div>
            <div className='flex w-full justify-center'>
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
            </div>
          </div>
        ))}
    </>
  )
}

export default Home
