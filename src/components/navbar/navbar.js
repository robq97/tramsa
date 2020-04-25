import React, { Component } from 'react';
import Logo from '../logo/Logo';
import { Link } from 'react-router-dom';
import Modal from '../../containers/ui/modal/Modal';
import Translate from 'react-translate-component';
import { logOut } from '../../containers/util/common';

class Navbar extends Component {

    changeLanguageEN = () => {
        this.props.parentCallback('en');
    }

    changeLanguageES = () => {
        this.props.parentCallback('es');
    }

    render() {
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
                            <a class="nav-link text-dark disabled " href="/#">{<Translate content="username" unsafe={true} />} {this.props.user}</a>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {<Translate content="sistema" />}
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link class="dropdown-item" to="/sistema/cambiar-contrasena">{<Translate content="cambiarContrasena" />}</Link>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {<Translate content="parametros" />}
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link class="dropdown-item" to="/parametros/param-generales">{<Translate content="parametrosGenerales" />}</Link>
                                <Link class="dropdown-item" to="/parametros/consecutivos">{<Translate content="consecutivos" />}</Link>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {<Translate content="administracion" />}
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link class="dropdown-item" to="/administracion/tipo-materia-prima">{<Translate content="tipoMateriaPrima" />}</Link>
                                <Link class="dropdown-item" to="/administracion/materia-prima">{<Translate content="materiaPrima" />}</Link>
                                <Link class="dropdown-item" to="/administracion/bodega">{<Translate content="bodegas" />}</Link>
                                <Link class="dropdown-item" to="/administracion/camion">{<Translate content="camiones" />}</Link>
                                <Link class="dropdown-item" to="/administracion/producto">{<Translate content="productos" />}</Link>
                                <Link class="dropdown-item" to="/administracion/cliente">{<Translate content="empresas" />}</Link>
                                <Link class="dropdown-item" to="/administracion/proveedor">{<Translate content="provedores" />}</Link>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {<Translate content="seguridad" />}
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link class="dropdown-item" to="/seguridad/eventos">{<Translate content="eventos" />}</Link>
                                <Link class="dropdown-item" to="/seguridad/roles">{<Translate content="roles" />}</Link>
                                <Link class="dropdown-item" to="/seguridad/usuarios">{<Translate content="usuarios" />}</Link>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {<Translate content="consultasClientes" />}
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link class="dropdown-item" to="/consultas/bitacora">{<Translate content="bitacora" />}</Link>
                                <Link class="dropdown-item" to="/consultas/clientes">{<Translate content="clientes" />}</Link>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {<Translate content="reportes" />}
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link class="dropdown-item" to="/reportes/productos">{<Translate content="reporteProductos" />}</Link>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {<Translate content="idioma" />}
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <button class="dropdown-item" onClick={this.changeLanguageEN}>English</button>
                                <button class="dropdown-item" onClick={this.changeLanguageES}>Español</button>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link" to="/ayuda" id="navbarLink" aria-haspopup="true" aria-expanded="false">
                                {<Translate content="ayuda" />}
                            </Link>
                        </li>
                        <li class="nav-item bg-dark navbar-btn">
                            <a class="nav-link  text-white " data-toggle="modal" data-target="#log-out" href="/#">{<Translate content="cerrarSesion" />}</a>
                            <Modal id="log-out" body={false} confirmBtn={true} confirmBtnAction={logOut} title={<Translate content="modalCerrarSesion" />} />
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navbar;