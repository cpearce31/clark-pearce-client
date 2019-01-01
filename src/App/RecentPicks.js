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
      <div>
        <h2>
          Pick of the week:
          {' '}
          {pick.name}
        </h2>
        <p>
          {pick.description}
        </p>
        <img
          src={pick.photo}
          alt={pick.name}
        />
      </div>
    )
  }
}

export default RecentPicks
