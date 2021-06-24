import Tasks from './Tasks'

const Header = () => {
    return (
        <>

        <header className='header'>
          <nav className='navbar navbar-expand-lg'>

          {/* Popup */}
          <div className="search-panel">
            <div className="search-inner d-flex align-items-center justify-content-center">
              <div className="close-btn">Close <i className="fa fa-close"></i></div>
              <form id="searchForm" action="#t">
                <div className="form-group">
                  TEST JJJ
                </div>
              </form>
            </div>
          </div>

            <div className='container-fluid d-flex align-items-center justify-content-between'>
              <div className='navbar-header'>
                {/* Navbar Header */}
                {/* Sidebar Toggle Btn */}
                <button className='sidebar-toggle'><i className='fa fa-long-arrow-left'></i></button>
              </div>
              <div className='right-menu list-inline no-margin-bottom'>

                {/* Tooltip */}
                <div className="list-inline-item">
                  <a href="#t" className="search-open nav-link"><i className="icon-check"></i></a>
                </div>

                <Tasks />

              </div>
            </div>
          </nav>
        </header>

        </>
    )
}

export default Header
