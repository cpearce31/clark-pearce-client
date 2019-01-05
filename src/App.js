import React from 'react'
import './App.scss'
import { Route, NavLink} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import About from './App/About'
import RecentPicks from './App/RecentPicks'
import Archive from './App/Archive'
import Publications from './App/Publications'
import Contact from './App/Contact'
import Piece from './App/Piece'
import Home from './App/Home'

const App = props => (
  <div>
    <header className={props.location.pathname === '/' ? 'hero' : 'hero-small'}>
      <h1>
          Clark Pearce
      </h1>
      <span>
        |
      </span>
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
        Home
      </NavLink>
      <span>
        |
      </span>
      <NavLink
        to="/about"
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
        component={Home}
      />
      <Route
        path="/about"
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

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default withRouter(App)
