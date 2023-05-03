import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app created by{" "}
          <a href='https://www.benjahminkoenigsberg.com' className='font-bold shadow-xl'>Benjahmin Koenigsberg </a>
        to search GitHub profiles and see developers' details. This project is part
        of the
        <a
          href="https://www.traversymedia.com/products/react-front-to-back/"
          className="italic">
          {" "}
          React Front To Back course by
        </a>{" "}
        <strong>
          <a href="https://traversymedia.com" className="font-bold shadow-xl">
            {" "}
            Brad Traversy
          </a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a className="text-white" href="https://twitter.com/hassibmoddasser">
          Hassib Moddasser
        </a>
      </p>
    </div>
  );
}

export default About
