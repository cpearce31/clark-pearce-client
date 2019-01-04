import React, { Component } from 'react'
import wretch from 'wretch'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import apiUrl from '../apiConfig'

class Piece extends Component {
  constructor () {
    super()

    this.state = {
      piece: null
    }
  }

  componentDidMount () {
    const { id } = this.props.match.params

    return wretch(`${apiUrl}/pieces/${id}`)
      .get().json()
      .then(res => this.setState({ piece: res.piece }))
      .catch(err => console.error(err))
  }

  render () {
    const  { piece } = this.state

    return piece && (
      <div className="piece">
        <h4 className="page-title">
          {piece.name}
        </h4>
        <img
          src={piece.full_photo}
          alt={piece.name}
        />
        <div className="piece-text-wrapper">
          <p>
            {piece.description}
          </p>
          <Link to="/archive">
            Back to archive
          </Link>
        </div>
      </div>
    )
  }
}

Piece.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired
}

export default Piece
