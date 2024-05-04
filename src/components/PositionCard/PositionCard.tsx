import React from 'react'
import './PositionCard.scss'

export default function PositionCard() {
  return (
    <article className='positionCard'>
      <div className="cardRow">
        <p className="label">Puesto:</p>
        <p className="data">Desaroollador FullStack</p>
      </div>
      <div className="cardRow">
        <p className="label">Descripcion:</p>
        <p className="data">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
      </div>
      <div className="cardRow">
        <p className="label">Estado:</p>
        <p className="data"> Abierto</p>
      </div>
      <div className="cardRow">
        <p className="label">Candidatos:</p>
        <p className="data">23</p>
      </div>

    </article>
  )
}
