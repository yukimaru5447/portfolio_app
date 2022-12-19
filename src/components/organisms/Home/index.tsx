import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import Loading from '@/components/atoms/Loading'
import PortfolioCard from '@/components/organisms/PortfolioCard'
import SearchBlock from '@/components/organisms/SearchBlock'

import useHooks from './hooks'

const Home: FC = () => {
  const { isLoading, error, portfolioGridRows } = useHooks()

  if (isLoading) return <Loading />
  if (error) <p>{error.message}</p>

  return (
    <>
      <SearchBlock />
      <div className='mt-5 mb-5 flex flex-col items-center justify-center space-y-4'>
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
      </div>
    </>
  )
}

export default Home
