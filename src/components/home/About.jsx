import React from 'react'

const About = () => {
  return (
    <div
      id="about"
      className="ml-8 mr-8 md:ml-24 md:mr-24 mt-16 sm:mt-36 md:mt-44 lg:mt-64"
    >

    <div
      id="about"
      className="ml-8 mr-8 md:ml-24 md:mr-24 mt-16 sm:mt-36 md:mt-44 lg:mt-64"
    >
      <h1 className="font-bold text-xl md:text-2xl pb-10">About.</h1>
      <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide">
        <span className="font-[1000] font-space leading-3">
          We believe that{' '}
        </span>{' '}
        <span className="font-light italic font-sans">technology</span>{' '}
      </p>
      <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-[1000] font-space line-clamp-1 tracking-wide">
        can transform the world.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-7">
        <div className="col-span-1 md:col-span-5 pt-8">
          <p>
            That is why we're committed to delivering innovative IT solutions to
            businesses of all sizes. Our team of experienced professionals is
            dedicated to helping you achieve your goals and thrive in a rapidly
            evolving digital landscape. Our goal is to help businesses of all
            sizes succeed by providing customized solutions that meet their
            unique needs.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2"></div>
      </div>
    </div>
    </div>
  )
}


export default About
