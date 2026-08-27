import React from 'react'

export default function Header() {
  return (
    <div>
        <header className="header">
            <h1><strong><em>REAL MADRID</em></strong></h1>
                <nav className="nav-link">
                    <ul>
                        <li className="link">
                            <a href="index.html" target="_blank" rel="noopener noreferrer">HISTORIA</a>
                        </li>
                        <li className="link">
                            <a href="inicio.html" target="_blank" rel="noopener noreferrer">INICIO</a>
                        </li>
                        <li className="link">
                            <a href="info.html" target="_blank" rel="noopener noreferrer">ESTADISTICAS</a>
                        </li>
                        <li classNameName="link">
                            <a href="contacto.html" target="_blank" rel="noopener noreferrer">DATOS DEL SOCIO</a>
                        </li>
                    </ul>
                </nav>
        </header>
    </div>
  )
}
