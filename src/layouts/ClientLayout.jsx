import React from "react"
import NavbarComponent from "../Components/utils/NavbarComponent"
import FooterComponent from "../Components/utils/FooterComponent"
import Home from "../pages/client/Home"

const ClientLayout = () => {
    return(
        <>
            <NavbarComponent/>
                <Home/>
            <FooterComponent/>
        </>
    )
}

export default ClientLayout;