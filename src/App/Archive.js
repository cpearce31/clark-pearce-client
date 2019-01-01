import React, { Component } from 'react'
import wretch from 'wretch'

import apiUrl from '../apiConfig'

class Archive extends Component {
  constructor () {
    super()

    this.state = {
      pieces: []
    }
  }

  componentDidMount () {
    return wretch(`${apiUrl}/pieces`)
      .get().json()
      .then(res => this.setState({ pieces: res.pieces }))
      .catch(err => console.error(err))
  }

  render () {
    const  { pieces }= this.state

    return (
      <div>
        <h2>
          Archive
        </h2>
        {(pieces.map(piece => (
          <figure key={piece.id}>
            <img
              src={piece.cropped_photo}
              alt={piece.name}
            />
            <figcaption>
              {piece.name}
            </figcaption>
          </figure>
        )))}
      </div>
    )
  }
}

export default Archive
