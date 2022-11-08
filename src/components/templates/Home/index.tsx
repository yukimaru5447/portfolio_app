import { FC } from 'react'

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
              {grid.row &&
                grid.row.map(({ id, title }) => (
                  <PortfolioCard key={id} id={id} title={title} />
                ))}
            </div>
          </div>
        ))}
    </>
  )
}

export default Home
