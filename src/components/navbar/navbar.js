import React from 'react';
import Logo from '../../components/logo/Logo';

const Navbar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light navbar-grey text-center">
            <Logo />
            <a class="navbar-brand" href="#">TRAMESQUIN</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link text-dark disabled " href="#"><b>Usuario:</b> {props.user}</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sistema
                            </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Cambiar Contraseña</a>
                            <a class="dropdown-item" href="#">Reiniciar Sesión</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Par&aacute;metros
                            </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Parámetros Generales</a>
                            <a class="dropdown-item" href="#">Consecutivos</a>
                            <a class="dropdown-item" href="#">Idioma</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Administraci&oacute;n
                            </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Tipo Materia Prima</a>
                            <a class="dropdown-item" href="#">Bodegas</a>
                            <a class="dropdown-item" href="#">Camiones</a>
                            <a class="dropdown-item" href="#">Productos</a>
                            <a class="dropdown-item" href="#">Empresas/Clientes</a>
                            <a class="dropdown-item" href="#">Provedores</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Procesos
                            </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Crear Pedido Materias</a>
                            <a class="dropdown-item" href="#">Comprobar Orden de Pedido</a>
                            <a class="dropdown-item" href="#">Entrada de Inventario</a>
                            <a class="dropdown-item" href="#">Producción en Lote</a>
                            <a class="dropdown-item" href="#">Punto de Venta</a>
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
                            <a class="dropdown-item" href="#">Bitácora</a>
                            <a class="dropdown-item" href="#">Clientes</a>
                            <a class="dropdown-item" href="#">Pedidos Pendientes</a>
                            <a class="dropdown-item" href="#">Facturas</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Reportes
                            </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Productos</a>
                            <a class="dropdown-item" href="#">Clientes</a>
                            <a class="dropdown-item" href="#">Inventarios</a>
                            <a class="dropdown-item" href="#">Ventas</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ayuda
                            </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Acerca de</a>
                            <a class="dropdown-item" href="#">Ayuda</a>
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
                    <li class="nav-item bg-dark navbar-btn">
                        <a class="nav-link  text-white " href="#">Cerrar Sesi&oacute;n</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;