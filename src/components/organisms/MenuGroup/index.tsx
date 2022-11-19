import { ComponentProps, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

type Props = {
  items: {
    name: string
    onClick: () => void
    icon: ComponentProps<'svg'>
  }[]
  menuName: string
}

const MenuGroup = ({ items, menuName }: Props) => {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <Menu.Button className='inline-flex w-full justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white'>
        {menuName}
        <ChevronDownIcon
          className='ml-2 -mr-1 h-5 w-5 text-slate-200 hover:text-slate-100'
          aria-hidden='true'
        />
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
          {items.map(({ name, onClick, icon }) => {
            return (
              <div key={name} className='px-1 py-1'>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => onClick()}
                      className={`${
                        active ? 'bg-slate-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <>
                        {icon}
                        <div>{name}</div>
                      </>
                    </button>
                  )}
                </Menu.Item>
              </div>
            )
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default MenuGroup
