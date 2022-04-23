import Image from 'next/image'
import {
  SearchIcon,
  GlobeAltIcon,
  UsersIcon,
  UserCircleIcon,
  MenuIcon,
} from '@heroicons/react/solid'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      <div className="relative flex h-10 cursor-pointer items-center">
        <Image
          src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'}
          layout="fill"
          objectFit="contain"
          objectPosition={'left'}
          priority={true}
        />
      </div>

      <div className="flex items-center justify-between rounded-full py-2 px-5 md:border-2 md:shadow-sm">
        <input
          type="text"
          className="flex-grow bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:inline-flex" />
      </div>

      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 rounded-full border-2 p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  )
}
