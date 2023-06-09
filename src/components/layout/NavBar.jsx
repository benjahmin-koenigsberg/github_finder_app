
import {FaGithub, FaHome, FaInfo} from 'react-icons/fa'
import  { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const NavBar = ( {title} ) => {
  return (
    <nav className="navbar mb-12 shadow-xl bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none  px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link className="text-lg font-bold align-middle" to="/">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              <FaHome className='text-3xl' />
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              <FaInfo className='text-2xl' />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
NavBar.defaultProps = {
    title: 'Github Finder',
}

NavBar.propTypes = {
    title: PropTypes.string,
}

export default NavBar
