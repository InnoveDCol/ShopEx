import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="wrapper">
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h5><i className="fa fa-tachometer"></i> Administracion</h5>
                </div>
                <ul className="list-unstyled components">
                    <li>
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i
                            className="fa-brands fa-product-hunt"></i> Productos</a>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                                <Link to="/nuevoProducto"><i className="fa fa-plus"></i> Crear</Link>
                            </li>
                            <li>
                                <Link to="/listaProductos"><i className="fa fa-clipboard"></i> Todos</Link>
                            </li>
                            <li>
                                <Link to="/productosDisponibles"><i className="fa fa-check-square"></i> Disponibles</Link>
                            </li>
                            <li>
                                <Link to="/productosAgotados"><i className="fa fa-times-circle"></i> Agotados</Link>
                            </li>
                            
                        </ul>
                    </li>

                    <li>
                        <Link to="/orders"><i className="fa fa-shopping-basket"></i> Pedidos</Link>
                    </li>

                    <li>
                        <Link to="/users"><i className="fa fa-users"></i> Usuarios</Link>
                    </li>

                    <li>
                        <Link to="/reviews"><i className="fa fa-star"></i> Opiniones</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar