import React from 'react'

export default function Header() {
  return (
    <div>
      <header className="d-flex align-items-center justify-content-between px-4 py-2 header-gestion">

  <div className="d-flex align-items-center gap-2">
    <span className="fs-4 fw-bold text-white">📦 GestiónKiosco</span>
  </div>

  <div id="fecha" className="text-white text-capitalize" style="font-size: 14px;">
  </div>

  <div className="flex-grow-1 mx-4" style="max-width: 300px;">
    <input type="text" className="form-control" placeholder="Buscar producto, proveedor u orden..."/>
  </div>

  <div className="d-flex align-items-center gap-3">

    <button className="btn btn-outline-light position-relative">
      🔔
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        3
      </span>
    </button>

    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown">
        <img src="https://github.com/mdo.png" alt="Usuario" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
        <li><a className="dropdown-item" href="#">Mi perfil</a></li>
        <li><a className="dropdown-item" href="#">Configuración</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Cerrar sesión</a></li>
      </ul>
    </div>

  </div>
</header>
    </div>
  )
}


