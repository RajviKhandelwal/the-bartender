import React from 'react'
import "./Cocktail.css"
import { Link } from 'react-router-dom'

export default function Cocktail({ image, name, id, info, glass }) {

  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          Details
        </Link>
      </div>
    </article>
  )
}