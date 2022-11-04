import React from "react";

const Navbar = () => 
{
        return(
                <header id="navbar">
                        <nav>
                              <ul>
                                <li><button onClick={() => console.log("Iniciar Sesión")}>Iniciar Sesión</button></li>
                                <li><button onClick={() => console.log("Registro")}>Registrarse</button></li>
                              </ul>  
                        </nav>
                </header>
        )
}

export default Navbar;