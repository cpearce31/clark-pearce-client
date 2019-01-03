import React from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

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
      <Link
        to="/about"
        className='navbar-link'
      >
        About
      </Link>
      <span>
        |
      </span>
      <Link
        to="/recent_picks"
        className='navbar-link'
      >
        Recent Picks
      </Link>
      <span>
        |
      </span>
      <Link
        to="/archive"
        className='navbar-link'
      >
        Archive
      </Link>
      <span>
        |
      </span>
      <Link
        to="/publications"
        className='navbar-link'
      >
        Publications
      </Link>
      <span>
        |
      </span>
      <Link
        to="/contact"
        className='navbar-link'
      >
        Contact
      </Link>
    </nav>
    <div className="main">
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

export default App
