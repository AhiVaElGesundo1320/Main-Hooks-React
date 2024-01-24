import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="relative">
      <div>
        <nav class="sticky top-0" style={{backgroundColor:'gray', color: 'white'}}>
          <div class="m-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-start">
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/*  <!-- Mobile menu button-->*/}
                <button
                  type="button"
                  class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={() => {
                    document
                      .getElementById("mobile-menu")
                      .classList.toggle("hidden");
                  }}
                >
                  <span class="absolute -inset-0.5"></span>
                  <span class="sr-only">Open main menu</span>
                  {/*<!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
  -->*/}
                  <svg
                    class="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  {/*<!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
  -->*/}
                  <svg
                    class="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-start">
                <div class="hidden sm:ml-6 sm:block">
                  <div class="flex space-x-4">
                    {/*<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}
                    <NavLink
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      end
                      to={"/"}
                    >
                      Home
                    </NavLink>
                    <NavLink
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      to={"/estado"}
                    >
                      UseState
                    </NavLink>
                    <NavLink
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      to={"/efecto"}
                    >
                      UseEffect
                    </NavLink>
                    <NavLink
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      to={"/contexto"}
                    >
                      UseContext
                    </NavLink>
                    <NavLink
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      to={"/ref"}
                    >
                      UseRef
                    </NavLink>
                    <NavLink
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      to={"/reducer"}
                    >
                      UseReducer
                    </NavLink>
                  </div>
                </div>
              </div>
              <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/*<!-- Profile dropdown -->*/}
                <div class="relative ml-3">
                  <div></div>

                  {/*<!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
  -->*/}
                </div>
              </div>
            </div>
          </div>

          {/*Mobile menu, show/hide based on menu state*/}
          <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2">
              {/*<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}

              <NavLink
                className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
                to={"/estado"}
              >
                UseState
              </NavLink>
              <NavLink
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
                to={"/efecto"}
              >
                UseEffect
              </NavLink>
              <NavLink
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
                to={"/contexto"}
              >
                UseContext
              </NavLink>
              <NavLink
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
               
                to={"/ref"}
              >
                Ref
              </NavLink>
              <NavLink
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                to={"/reducer"}
              >
                UseReducer
              </NavLink>
              
            </div>
          </div>
        </nav>
        <hr />
        <Outlet />
      </div>
    </div>
  );
};
