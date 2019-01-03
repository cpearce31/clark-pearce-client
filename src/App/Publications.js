import React, { Component } from 'react'
import wretch from 'wretch'

import apiUrl from '../apiConfig'

class Publications extends Component {
  constructor () {
    super()

    this.state = {
      publications: null
    }
  }

  componentDidMount () {
    return wretch(`${apiUrl}/articles`)
      .get().json()
      .then(res => this.setState({ publications: res.articles }))
      .catch(err => console.error(err))
  }

  render () {
    const { publications } = this.state
    return publications && (
      <div className="pubs">
        <h2>
          Publications
        </h2>
        {(publications.map(pub => (
          <article
            key={pub.id}
            className="pub"
          >
            <img
              src={pub.photo}
              alt={pub.title}
            />
            <section className="pub-text-wrapper">
              <h4 className="pub-title">
                {pub.title}
              </h4>
              <h5 className="pub-subtitle">
                {pub.subtitle}
              </h5>
              <p>
                {pub.summary}
              </p>
              <a href={pub.url}>
                Read full article
              </a>
            </section>
          </article>
        )))}
      </div>
    )
  }
}

export default Publications
