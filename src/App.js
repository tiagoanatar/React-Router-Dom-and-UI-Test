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
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// components
import Header from './components/header'
import SideMenu from './components/SideMenu'
import Footer from './components/Footer'

//screens
import Map from './screens/Map'
import Army from './screens/Army'

function Home() {
  return (

  <>
    <div className='title'><strong>Basic Table</strong></div>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, ex sed pretium pellentesque, ex erat varius odio, in cursus enim dui a ipsum. Duis consequat nibh eu mi commodo, a pellentesque quam placerat. Praesent vitae velit fermentum, mollis neque sit amet, tempus nisi. Suspendisse non sollicitudin nisi. Pellentesque ultricies vestibulum ligula vulputate lobortis. Nunc eu diam lorem. Quisque orci orci, fringilla vel dictum ut, vestibulum quis augue. Sed sollicitudin finibus tincidunt. Vestibulum porta facilisis justo a sagittis.</p>
  </>

  )
}

function App() {
  return (

    <Router>
    <Header />
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
                      <Home />
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
