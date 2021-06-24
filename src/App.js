// import logo from './logo.svg'
// import './App.css';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './vendor/font-awesome/css/font-awesome.min.css'
import './css/font.css'
import './css/style.blue.css'
import './css/custom.css'

// js
import './js/front.js'

// react
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Header from './components/header'
import SideMenu from './components/SideMenu'
import Footer from './components/Footer'

//screens
import Map from './screens/Map'
import Army from './screens/Army'

function App() {

  const [task, setTaask] = useState(4)

  useEffect(() => {
    let x = task + 1
    setTaask(x)
  }, [])

  return (

    <Router>
    <Header task={task} />
    <div className='d-flex align-items-stretch'>
      <SideMenu />
      <div className='page-content'>
        {/* Page Header */}
        <div className='page-header no-margin-bottom'>
          <div className='container-fluid'>
            <h2 className='h5 no-margin-bottom'>Tables</h2>
          </div>
        </div>
        {/* Breadcrumb */}
        <div className='container-fluid'>
          <ul className='breadcrumb'>
            <li className='breadcrumb-item'><a href='index.html'>Home</a></li>
            <li className='breadcrumb-item active'>Tables        </li>
          </ul>
        </div>
        <section className='no-padding-top'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='block margin-bottom-sm'>
                  {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
                  <Switch>
                    <Route path='/army'>
                      <Army />
                    </Route>
                    <Route path='/test'>

                    </Route>
                    <Route path='/'>
                      <Map />
                    </Route>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
    </Router>

  );
}

export default App;
