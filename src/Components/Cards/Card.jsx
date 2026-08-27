import React from 'react'

export default function Card({nombre , apellido , pais }) {
  return (
    <div>
      <h2>mi nombre es {nombre} {apellido} ,vivo en {pais}</h2>
    </div>
  )
}

