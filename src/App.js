import React from 'react'
import './App.scss'
import { Route, NavLink} from 'react-router-dom'

import About from './App/About'
import RecentPicks from './App/RecentPicks'
import Archive from './App/Archive'
import Publications from './App/Publications'
import Contact from './App/Contact'
import Piece from './App/Piece'


const App = () => (
  <div>
    <header className='hero'>
      <h1>
        Clark Pearce
      </h1>
      <h3>
        Fine Art Consulting
      </h3>
    </header>
    <nav className='navbar'>
      <NavLink
        exact
        to="/"
        className='navbar-NavLink'
        activeClassName='nav-active'
      >
        About
      </NavLink>
      <span>
        |
      </span>
      <NavLink
        to="/recent_picks"
        className='navbar-NavLink'
        activeClassName='nav-active'
      >
        Recent Picks
      </NavLink>
      <span>
        |
      </span>
      <NavLink
        to="/archive"
        className='navbar-NavLink'
        activeClassName='nav-active'
      >
        Archive
      </NavLink>
      <span>
        |
      </span>
      <NavLink
        to="/publications"
        className='navbar-NavLink'
        activeClassName='nav-active'
      >
        Publications
      </NavLink>
      <span>
        |
      </span>
      <NavLink
        to="/contact"
        className='navbar-NavLink'
        activeClassName='nav-active'
      >
        Contact
      </NavLink>
    </nav>
    <div className="main">
      <Route
        exact
        path="/"
        component={About}
      />
      <Route
        path="/recent_picks"
        component={RecentPicks}
      />
      <Route
        path="/archive"
        component={Archive}
      />
      <Route
        path="/publications"
        component={Publications}
      />
      <Route
        path="/contact"
        component={Contact}
      />
      <Route
        path="/pieces/:id"
        component={Piece}
      />
    </div>
  </div>
)

export default App
