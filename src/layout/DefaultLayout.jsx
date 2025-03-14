import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../components/Header";
import Loader from "../components/Loader";

const DefaultLayout = () => {

    const [loading, setLoading] = useState(true);
    const location = useLocation()

    // Cambia lo stato del loader ogni volta che cambia la pagina
    useEffect(() => {
        // Mostra il loader all'inizio del caricamento
        setLoading(true);
        const timer = setTimeout(() => {
            // Nascondi il loader quando la pagina è completamente caricata
            setLoading(false);
        });
    }, [location]);

    return (
        <>
            <Header />
            <main>
                {loading ? <Loader /> : <Outlet />}
            </main>
        </>

    )
}

export default DefaultLayout