import React from 'react';
import Navbar from '../navbar/Navbar';

const layout = (props) => (
    <div>
        <Navbar user="nombreUsuario" />
        <main className="container">
            {props.children}
        </main>
    </div>
);

export default layout;