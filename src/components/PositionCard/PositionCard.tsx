/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import './PositionCard.scss'

type Props={
  data?:any
}
export default function PositionCard({data}:Props) {
  console.log(data)
  const title = data?.title || 'Ejemplo '
  const job_description = data?.job_description || 'Descripcion de oferta laboral ejemplo '
  const status = data?.status || 'status'
  const countCandidates = data?.candidate_data.length || 0


  return (
    <article className='positionCard'>
      <div className="cardRow">
        <p className="label">Puesto:</p>
        <p className="data">{title}</p>
      </div>
      <div className="cardRow">
        <p className="label">Descripcion:</p>
        <p className="data descripcion">{job_description}</p>
      </div>
      <div className="cardRow">
        <p className="label">Estado:</p>
        <p className="data"> {status}</p>
      </div>
      <div className="cardRow">
        <p className="label">Candidatos:</p>
        <p className="data">{countCandidates}</p>
      </div>

    </article>
  )
}
