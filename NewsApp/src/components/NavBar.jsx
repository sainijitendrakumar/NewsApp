import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (


    <nav className="bg-gray-500 border-gray-200 dark:bg-gray-900 sticky top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          

          <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
           
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</NavLink>
              </li>
              <li>
                <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</NavLink>
              </li>
              <li>
                <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</NavLink>
              </li>
            </ul>
          </div>
          <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink to="/" className={({isActive}) =>`block  py-2 px-1 ${isActive?'text-blue-700': 'text-gray-900'} rounded `} aria-current="page">Home</NavLink>
            </li>
            <li>
              <NavLink to="/business" className={({isActive}) =>`block  py-2 px-1 ${isActive?'text-blue-700': 'text-gray-900'} rounded `}>Business</NavLink>
            </li>
            <li>
              <NavLink to="/entertainment" className={({isActive})=>`block  py-2 px-1 ${isActive?'text-blue-700': 'text-gray-900'} rounded`}>Entertainment</NavLink>
            </li>
            <li>
              <NavLink to="/health" className={({isActive}) =>`block  py-2 px-1 ${isActive?'text-blue-700': 'text-gray-900'} rounded `}>Health</NavLink>
            </li>
            <li>
              <NavLink to="/sports" className={({isActive}) =>`block  py-2 px-1 ${isActive?'text-blue-700': 'text-gray-900'} rounded `}>Sports</NavLink>
            </li>
            <li>
              <NavLink to="/technology" className={({isActive}) =>`block  py-2 px-1 ${isActive?'text-blue-700': 'text-gray-900'} rounded `}>Technology</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  )
}

export default NavBar