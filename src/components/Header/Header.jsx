import React from "react";


const Header = () => {

    //TODO: Please kbk add to hover for the letters in the header ( green color )
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-20 w-auto" src="https://img.freepik.com/vector-gratis/icono-hoja-cannabis_98292-4592.jpg?w=826&t=st=1692331951~exp=1692332551~hmac=788e8daae5175876bcab6832d8690e889bdc8879397c9aef4130eaa59af14e10" alt="weed_icon" />
                    </a>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">My Products</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Contact</a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>
        </header>
    )
}

export default Header;

