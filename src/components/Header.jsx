import React from "react";


const Header = () => {
    return (
        <header className="flex flex-row gap-10">
            <div className="flex flex-col md:flex-row md:justify-between 
            md:items-center gap-4 mb-6">
                Productos
            </div>
            <div className="flex flex-col md:flex-row md:justify-between 
            md:items-center gap-4 mb-6">
                Productos sin THC
            </div>
            <div className="flex flex-col md:flex-row md:justify-between 
            md:items-center gap-4 mb-6">
                Contacto
            </div>
            
        </header>
    )
}

export default Header;

