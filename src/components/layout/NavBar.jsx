import { React, useState } from 'react'

function NavBar() {
  const links = [

    { name: "About Us", to: "#about" },
    { name: "Services", to: "#service" },

    { name: "Pricing", to: "/#" },
    { name: "Blog", to: "/#" },
    { name: "Contact", to: "/#" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <nav
        className={`${
          isOpen ? 'bg-[#D5D9E5]' : 'bg-transparent'
        } w-full z-20 top-0 left-0`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ml-4 md:ml-20 mr-8 md:mr-16">
          <a href="/#" className="flex items-center">
            <p className="self-center text-3xl font-bold whitespace-nowrap font-space">
              {' '}
              WAVE
            </p>
            <span className="self-center text-3xl whitespace-nowrap font-light">
              NET
            </span>
          </a>
          <div className="flex md:order-1">
            <button
              type="button"
              onClick={toggleNavbar}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary border border-primary rounded-lg md:hidden bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isOpen ? 'block' : 'hidden'
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={`${link.to}`}
                    className="uppercase block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0 "
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="focus:ring-4 focus:outline-none uppercase focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center border border-primary ml-4"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
