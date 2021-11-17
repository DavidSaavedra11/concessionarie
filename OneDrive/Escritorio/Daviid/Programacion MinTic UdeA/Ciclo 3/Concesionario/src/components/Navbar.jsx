import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "media/logo-moto2.png";
import TriggerDarkMode from './TriggerDarkMode';


const Navbar = () => {
    
    return (
      <div>
        <nav class="bg-purple-700 dark:bg-gray-800  shadow-xl py-6 ">
          <div class="max-w-7xl mx-auto px-8">
            <div class="flex items-center justify-between h-16">
              <div class=" flex items-center">
                <a class="flex-shrink-0" href="/">
                  <img class="h-20 w-25" src={Logo} alt="LogoAqui" />
                </a>
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-4">
                    <Link to="/">
                      <a
                        class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                        href="/#"
                      >
                        Principal
                      </a>
                    </Link>
                    <Link to="/">
                      <a
                        class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                        href="/#"
                      >
                        Contenido
                      </a>
                    </Link>
                    <Link to="/">
                      <a
                        class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                        href="/#"
                      >
                        Iniciar Sesion
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="block">
                <div class="ml-4 flex items-center md:ml-6">
                  <div class="ml-3 relative">
                    <div class="relative inline-block text-left">
                      <div>
                        <Link to="/login">
                          <button
                            type="button"
                            class="  flex items-center justify-center w-full rounded-xl  px-3 py-2 text-sm font-medium text-yellow-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                            id="options-menu"
                          >
                            <svg
                              width="50"
                              fill="currentColor"
                              height="50"
                              class="text-red-800"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              Login
                              <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                            </svg>
                          </button>
                        </Link>
                      </div>
                      <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                        {/* <div
                          class="py-1 "
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <a
                            href="#"
                            class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                            role="menuitem"
                          >
                            <span class="flex flex-col">
                              <span>Settings</span>
                            </span>
                          </a>
                          <a
                            href="/login"
                            class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                            role="menuitem"
                          >
                            <span class="flex flex-col">
                              <span>Login</span>
                            </span>
                          </a>
                          <a
                            href="#"
                            class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                            role="menuitem"
                          >
                            <span class="flex flex-col">
                              <span>Logout</span>
                            </span>
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="-mr-2 flex md:hidden">
                <button class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="h-8 w-8"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* <a
                class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/#"
              >
                Home
              </a>
              <a
                class="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/#"
              >
                Gallery
              </a>
              <a
                class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/#"
              >
                Content
              </a>
              <a
                class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/#"
              >
                Contact
              </a> */}
            </div>
          </div>
        </nav>
      </div>

      // <nav className="bg-red-400">
      //     <ul className='flex w-full justify-between my-3'>
      //         <li>Navegacion 1</li>
      //         <li>Navegacion 2</li>
      //         <li>
      //             <TriggerDarkMode />
      //         </li>
      //         <li className='px-3'>
      //             <Link to='/login'>
      //                 <button className='bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700'>
      //                     Iniciar Sesion
      //                 </button>
      //             </Link>
      //         </li>
      //     </ul>
      // </nav>
    );
}

export default Navbar;
