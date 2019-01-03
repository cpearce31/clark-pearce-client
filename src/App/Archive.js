import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
    const  { pieces } = this.state

    return (
      <div>
        <h2 className="page-title">
          Archive
        </h2>
        <div className="archive-main">
          {(pieces.map(piece => (
            <figure
              className="thumb-wrapper"
              key={piece.id}
            >
              <Link to={`/pieces/${piece.id}`}>
                <img
                  className="thumb"
                  src={piece.cropped_photo}
                  alt={piece.name}
                />
                <figcaption className="thumb-title">
                  {piece.name}
                </figcaption>
              </Link>
            </figure>
          )))}
        </div>
      </div>
    )
  }
}

export default Archive
