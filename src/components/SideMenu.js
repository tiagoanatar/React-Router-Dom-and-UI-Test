import { BrowserRouter as Router, Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <>
        <nav id='sidebar'>
          {/* Sidebar Header */}
          <div className='sidebar-header d-flex align-items-center'>
          </div>

          <ul className='list-unstyled'>
            <li className='active'><Link to='/'><i className='icon-home'></i>Map</Link></li>
            <li><Link to='/army'><i className='icon-grid'></i>Army</Link></li>
            <li><a href='#'> <i className='fa fa-bar-chart'></i>Save </a></li>
            <li><a href='#'> <i className='icon-padnote'></i>Load </a></li>
            <li><a href='#' aria-expanded='true' data-toggle='collapse'> <i className='icon-windows'></i>Example dropdown </a>
              <ul id='exampledropdownDropdown' className='collapse list-unstyled '>
                <li><a href='#'>Page</a></li>
                <li><a href='#'>Page</a></li>
                <li><a href='#'>Page</a></li>
              </ul>
            </li>
          </ul>
          
        </nav>
        </>
    )
}

export default SideMenu
