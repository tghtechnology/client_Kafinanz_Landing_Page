import { List, ListItem, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const NavbarComponent = () =>{
    return(
        <div className="bg-[#A63884] max-w-[1800px] mx-auto z-50">
            <div className="">
                <ul className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
                    <li>
                    ¿Por que elejirnos?
                    </li>

                    <li>
                    Nuestro Servicio
                    </li>
                    
                    <li>
                    <Button>
                            Presupuesto
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarComponent;