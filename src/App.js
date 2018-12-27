import React from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

import About from './App/About'
import RecentPicks from './App/RecentPicks'
import Archive from './App/Archive'
import Publications from './App/Publications'
import Contact from './App/Contact'

const App = () => (
  <div>
    <nav>
      <Link to="/about">About</Link>
      <Link to="/recent_picks">Recent Picks</Link>
      <Link to="/archive">Archive</Link>
      <Link to="/publications">Publications</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <div>
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
    </div>
  </div>
)

export default App
