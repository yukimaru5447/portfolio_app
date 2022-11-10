import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { PencilIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import useHooks from './hooks'

const MenuGroup = () => {
  const { t } = useHooks()
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <Menu.Button className='inline-flex w-full justify-center rounded-md bg-slate-500 px-4 py-2 text-sm font-medium text-white hover:bg-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white'>
        {t('common:Post')}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='px-1 py-1 '>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={'/portfolio/new'}
                  className={`${
                    active ? 'bg-slate-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <PencilIcon
                    className='mr-2 h-5 w-5 text-slate-400'
                    aria-hidden='true'
                  />
                  {t('portfolio:AddPortfolio')}
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className='px-1 py-1 '>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={'/portfolio/new'}
                  className={`${
                    active ? 'bg-slate-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <PencilSquareIcon
                    className='mr-2 h-5 w-5 text-slate-400'
                    aria-hidden='true'
                  />
                  {t('portfolio:EditDraft')}
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default MenuGroup
