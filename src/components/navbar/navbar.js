import React from 'react';
import Logo from '../logo/Logo';
import { Link } from 'react-router-dom';
import Modal from '../../containers/ui/modal/Modal';
import { logOut } from '../../containers/util/common';

const Navbar = (props) => {

    const handleLogOut = () => {
        logOut();
        window.location.reload();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-grey text-center">
            <Logo />
            <a className="navbar-brand" href="/">TRAMESQUIN</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link text-dark disabled " href="/#"><b>Usuario:</b> {props.user}</a>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sistema
                            </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/sistema/cambiar-contrasena">Cambiar Contraseña</Link>
                            <Link className="dropdown-item" to="/sistema/reiniciar-sesion">Reiniciar Sesión</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Par&aacute;metros
                            </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/parametros/param-generales">Parámetros Generales</Link>
                            <Link className="dropdown-item" to="/parametros/consecutivos">Consecutivos</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Administraci&oacute;n
                            </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/administracion/materia-prima">Tipo Materia Prima</Link>
                            <Link className="dropdown-item" to="/administracion/bodega">Bodegas</Link>
                            <Link className="dropdown-item" to="/administracion/camion">Camiones</Link>
                            <Link className="dropdown-item" to="/administracion/producto">Productos</Link>
                            <Link className="dropdown-item" to="/administracion/cliente">Empresas/Clientes</Link>
                            <Link className="dropdown-item" to="/administracion/proveedor">Proveedores</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Procesos
                            </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/procesos/crear-pedido-materias">Crear Pedido Materias</Link>
                            <Link className="dropdown-item" to="/procesos/comprobar-orden-de-pedido">Comprobar Orden de Pedido</Link>
                            <Link className="dropdown-item" to="/procesos/pedido">Pedidos</Link>
                            <Link className="dropdown-item" to="/procesos/entrada-de-inventario">Entrada de Inventario</Link>
                            <Link className="dropdown-item" to="/procesos/produccion-en-lote">Producción en Lote</Link>
                            <Link className="dropdown-item" to="/procesos/punto-de-venta">Punto de Venta</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Cajas
                            </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/cajas/apertura-cajas">Apertura Cajas</Link>
                            <Link className="dropdown-item" to="/cajas/arqueo-caja">Arqueo Cajas</Link>
                            <Link className="dropdown-item" to="/cajas/registrar-pase-dinero">Pases Dinero</Link>
                            <Link className="dropdown-item" to="/#">Exportar Facturas XML</Link>
                            <Link className="dropdown-item" to="/cajas/cierre-caja">Cierre Caja</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Seguridad
                            </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/seguridad/eventos">Eventos</Link>
                            <Link className="dropdown-item" to="/seguridad/roles">Roles</Link>
                            <Link className="dropdown-item" to="/seguridad/usuarios">Usuarios</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Consultas
                            </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/consultas/bitacora">Bitácora</Link>
                            <Link className="dropdown-item" to="/consultas/clientes">Clientes</Link>
                            <Link className="dropdown-item" to="/consultas/pedidos-pendientes">Pedidos Pendientes</Link>
                            <Link className="dropdown-item" to="/#">Facturas</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Reportes
                            </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/reportes/productos">Productos</Link>
                            <Link className="dropdown-item" to="/#">Clientes</Link>
                            <Link className="dropdown-item" to="/reportes/inventarios">Inventarios</Link>
                            <Link className="dropdown-item" to="/reportes/ventas">Ventas</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Idioma
                            </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/print">Ingles</Link>
                            <a className="dropdown-item" href="/#">Español</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link" to="/ayuda" id="navbarLink" aria-haspopup="true" aria-expanded="false">
                            Ayuda
                            </Link>
                    </li>
                    <li className="nav-item bg-dark navbar-btn">
                        <a className="nav-link  text-white " data-toggle="modal" data-target="#log-out" href="/">Cerrar Sesi&oacute;n</a>
                        <Modal id="log-out" body={false} confirmBtn={true} confirmBtnAction={handleLogOut} title="¿Está seguro que desea cerrar la sesión?" />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;