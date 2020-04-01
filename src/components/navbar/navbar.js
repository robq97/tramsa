import React from 'react';
import Logo from '../../components/logo/Logo';
import { Link } from 'react-router-dom';
import Modal from '../../containers/ui/modal/Modal';

const Navbar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light navbar-grey text-center">
            <Logo />
            <a class="navbar-brand" href="/">TRAMESQUIN</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link text-dark disabled " href="#"><b>Usuario:</b> {props.user}</a>
                    </li>
                    <li class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sistema
                            </Link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link class="dropdown-item" to="/sistema/cambiar-contrasena">Cambiar Contraseña</Link>
                            <Link class="dropdown-item" to="/sistema/reiniciar-sesion">Reiniciar Sesión</Link>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Par&aacute;metros
                            </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link class="dropdown-item" to="/parametros/param-generales">Parámetros Generales</Link>
                            <Link class="dropdown-item" to="/parametros/consecutivos">Consecutivos</Link>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Administraci&oacute;n
                            </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link class="dropdown-item" to="/administracion/materia-prima">Tipo Materia Prima</Link>
                            <Link class="dropdown-item" to="/administracion/bodega">Bodegas</Link>
                            <Link class="dropdown-item" to="/administracion/camion">Camiones</Link>
                            <Link class="dropdown-item" to="/administracion/producto">Productos</Link>
                            <Link class="dropdown-item" to="/administracion/cliente">Empresas/Clientes</Link>
                            <Link class="dropdown-item" to="/administracion/proveedor">Proveedores</Link>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Procesos
                            </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link class="dropdown-item" to="/procesos/crear-pedido-materias">Crear Pedido Materias</Link>
                            <Link class="dropdown-item" to="/procesos/comprobar-orden-de-pedido">Comprobar Orden de Pedido</Link>
                            <Link class="dropdown-item" to="/procesos/pedido">Pedidos</Link>
                            <Link class="dropdown-item" to="/procesos/entrada-de-inventario">Entrada de Inventario</Link>
                            <Link class="dropdown-item" to="/procesos/produccion-en-lote">Producción en Lote</Link>
                            <Link class="dropdown-item" to="/procesos/punto-de-venta">Punto de Venta</Link>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Cajas
                            </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Apertura Cajas</a>
                            <a class="dropdown-item" href="#">Arqueo Cajas</a>
                            <a class="dropdown-item" href="#">Pases Dinero</a>
                            <a class="dropdown-item" href="#">Exportar Facturas XML</a>
                            <a class="dropdown-item" href="#">Cierre Caja</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Seguridad
                            </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Eventos</a>
                            <a class="dropdown-item" href="#">Roles</a>
                            <a class="dropdown-item" href="#">Usuarios</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Consultas
                            </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link class="dropdown-item" to="/consultas/bitacora">Bitácora</Link>
                            <Link class="dropdown-item" to="/consultas/clientes">Clientes</Link>
                            <Link class="dropdown-item" to="/consultas/pedidos-pendientes">Pedidos Pendientes</Link>
                            <Link class="dropdown-item" to="#">Facturas</Link>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Reportes
                            </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link class="dropdown-item" to="/reportes/productos">Productos</Link>
                            <a class="dropdown-item" to="#">Clientes</a>
                            <Link class="dropdown-item" to="/reportes/inventarios">Inventarios</Link>
                            <Link class="dropdown-item" to="/reportes/ventas">Ventas</Link>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Idioma
                            </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Ingles</a>
                            <a class="dropdown-item" href="#">Español</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <Link class="nav-link" to="/ayuda" id="navbarLink" aria-haspopup="true" aria-expanded="false">
                            Ayuda
                            </Link>
                    </li>
                    <li class="nav-item bg-dark navbar-btn">
                        <a class="nav-link  text-white " data-toggle="modal" data-target="#log-out" href="#">Cerrar Sesi&oacute;n</a>
                        <Modal id="log-out" body={false} confirmBtn={true} title="¿Está seguro que desea cerrar la sesión?" />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;