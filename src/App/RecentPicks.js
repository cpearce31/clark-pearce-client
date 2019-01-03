import React, { Component } from 'react'
import wretch from 'wretch'

import apiUrl from '../apiConfig'

class RecentPicks extends Component {
  constructor () {
    super()

    this.state = {
      pick: null
    }
  }

  componentDidMount () {

    return wretch(`${apiUrl}/current-pick`)
      .get().json()
      .then(res => this.setState({ pick: res.pick }))
      .catch(err => console.error(err))
  }
  render () {
    const { pick } = this.state

    return pick && (
      <div className="pick">
        <h2 className="page-title">
          Pick of the week:
          {' '}
          {pick.name}
        </h2>
        <div className="pick-content-wrapper">
          <p className="pick-text">
            {pick.description}
          </p>
          <img
            src={pick.photo}
            alt={pick.name}
          />
        </div>
      </div>
    )
  }
}

export default RecentPicks
