import React from 'react'
import './Main.css'
export default function Main() {
    return (
    <div>
            <main>

            <h1>Bienvenido!</h1>
            <p>Sistema de gestión para administrar las operaciones de nuestro kiosco.</p>

            <p>Desde este sistema se podrán gestionar ventas, productos, 
                clientes y controlar el stock.</p>

            <h2>Accesos directos</h2>

            <div className="accesos">

                <div className="card">
                    <h3>Nueva venta</h3>
                    <p>Registrar una nueva venta</p>
                </div>

                <div className="card">
                    <h3>Agregar productos</h3>
                    <p>Incorporar productos al sistema</p>
                </div>

                <div className="card">
                    <h3>Registrar cliente</h3>
                    <p>Agregar un nuevo cliente</p>
                </div>

                <div className="card">
                    <h3>Generar factura</h3>
                    <p>Generar una factura de venta</p>
                </div>

            </div>
            
            <div className="paneles">

                <section className="cuadros">
                    <h2>Últimas ventas</h2>

                    <p>Venta #001 — $5.000</p>
                    <p>Venta #002 — $3.500</p>
                    <p>Venta #003 — $8.200</p>
                </section>

                <section className="cuadros">
                    <h2>Productos con bajo stock</h2>

                    <p>Coca Cola — 2 unidades</p>
                    <p>Galletitas — 1 unidad</p>
                    <p>Yerba — 3 unidades</p>
                </section>
            </div>
        </main>

    </div>
    )
}
